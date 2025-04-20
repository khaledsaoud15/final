import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../app/auth/authSlice";
import { Eye, EyeClosed, Mail, User } from "lucide-react";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [active, setActive] = useState(true);
  const [formule, setFormdata] = useState({
    fullname: user.fullname,
    email: user.email,
    password: user.password,
    address: user.address,
    phone: user.phone,
  });

  const [data, setData] = useState({});

  const [image, setImage] = useState(user.image);
  const [errors, setErrors] = useState({});

  const handlInputs = (e) => {
    setFormdata({ ...formule, [e.target.name]: e.target.value });
    validateInput(e.target.name, e.target.value);
  };

  const handleImage = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const validateInput = (name, value) => {
    let errorsCopy = { ...errors };
    switch (name) {
      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          errorsCopy.email = "Invalid email address";
        } else {
          delete errorsCopy.email;
        }
        break;
      case "password":
        if (value.length < 8) {
          errorsCopy.password = "Password must be at least 8 characters";
        } else {
          delete errorsCopy.password;
        }
        break;
      case "fullname":
        if (value.length < 3) {
          errorsCopy.fullname = "Fullname must be at least 3 characters";
        } else {
          delete errorsCopy.fullname;
        }
        break;
      case "address":
        if (value.length < 3) {
          errorsCopy.address = "Address must be at least 3 characters";
        } else {
          delete errorsCopy.address;
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          errorsCopy.phone = "Invalid phone number";
        } else {
          delete errorsCopy.phone;
        }
        break;
      default:
        break;
    }
    setErrors(errorsCopy);
  };

  const update = () => {
    if (Object.keys(errors).length === 0) {
      const form = new FormData();
      form.append("fullname", formule.fullname);
      form.append("email", formule.email);
      form.append("password", formule.password);
      form.append("address", formule.address);
      form.append("phone", formule.phone);
      form.append("image", image);

      dispatch(updateInfo({ id: user._id, userData: form }));

      setFormdata({
        fullname: "",
        email: "",
        password: "",
        address: "",
        phone: "",
      });
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/auth/user/" + user._id
      );
      setData(data);
    };

    fetchUsers();
  }, [user._id]);

  return (
    <div>
      <div className="flex flex-col gap-4 w-full">
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="email"
          >
            Email*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type="email"
              className="w-full h-full py-2 px-2 border-none outline-none"
              name="email"
              onChange={handlInputs}
              value={formule.email}
            />
            <Mail className="text-secondary text-sm" />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="fullname"
          >
            Fullname*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type="text"
              className="w-full h-full py-2 px-2 border-none outline-none"
              name="fullname"
              onChange={handlInputs}
              value={formule.fullname}
            />
            <User className="text-secondary text-sm" />
          </div>
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
        </div>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="password"
          >
            Password*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type={active ? "password" : "text"}
              className="w-full h-full py-2 px-2 border-none outline-none"
              name="password"
              onChange={handlInputs}
              value={formule.password}
            />
            {active ? (
              <Eye
                className="text-secondary text-sm"
                onClick={() => setActive(false)}
              />
            ) : (
              <EyeClosed
                className="text-secondary text-sm"
                onClick={() => setActive(true)}
              />
            )}
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="fullname"
          >
            Address*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type="text"
              className="w-full h-full py-2 px-2 border-none outline-none"
              name="address"
              onChange={handlInputs}
              value={formule.address}
            />
            <User className="text-secondary text-sm" />
          </div>
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="fullname"
          >
            Number*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type="text"
              className="w-full h-full py-2 px-2 border-none outline-none"
              name="phone"
              onChange={handlInputs}
              value={formule.phone}
            />
            <User className="text-secondary text-sm" />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-accent"
            htmlFor="fullname"
          >
            Image*:
          </label>
          <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
            <input
              type="file"
              className="w-full h-full py-2 px-2 border-none outline-none"
              onChange={handleImage}
            />
            <User className="text-secondary text-sm" />
          </div>
        </div>
        <button
          onClick={update}
          className="w-fit px-4 py-2 outline-3 outline-offset-4 outline-red-500 rounded shadow cursor-pointer bg-red-400"
        >
          Update
        </button>
        {message && <p className="text-green-500">Updated</p>}
      </div>

      <h1>{data.fullname}</h1>
      <h1>{data.email}</h1>
      <h1>{data.password}</h1>
      <h1>{data.phone}</h1>
      <h1>{data.address}</h1>
      <img src={data.image} />
    </div>
  );
};

export default Profile;
