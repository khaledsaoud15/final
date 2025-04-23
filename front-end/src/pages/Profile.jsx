import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateInfo } from "../app/auth/authSlice";
import { Eye, EyeClosed, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, message } = useSelector((state) => state.auth);
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(user?.image || null);

  const [formule, setFormule] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    password: "",
    address: user?.address || "",
    phone: user?.phone || "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormule({ ...formule, [name]: value });
    validateInput(name, value);
  };

  const handleImage = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const validateInput = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (value && value.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        } else {
          delete newErrors.password;
        }
        break;
      case "fullname":
        if (value.length < 3) {
          newErrors.fullname = "Fullname must be at least 3 characters";
        } else {
          delete newErrors.fullname;
        }
        break;
      case "address":
        if (value.length < 3) {
          newErrors.address = "Address must be at least 3 characters";
        } else {
          delete newErrors.address;
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          newErrors.phone = "Invalid phone number";
        } else {
          delete newErrors.phone;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleUpdate = () => {
    if (Object.keys(errors).length === 0) {
      const form = new FormData();
      form.append("fullname", formule.fullname);
      form.append("email", formule.email);
      if (formule.password) form.append("password", formule.password);
      form.append("address", formule.address);
      form.append("phone", formule.phone);
      if (image) form.append("image", image);

      dispatch(updateInfo({ id: user._id, userData: form }));

      setFormule((prev) => ({
        ...prev,
        password: "",
      }));
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">Email*:</label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input
            type="email"
            name="email"
            value={formule.email}
            onChange={handleInputs}
            className="w-full border-none outline-none"
          />
          <Mail className="text-secondary" />
        </div>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">
          Fullname*:
        </label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input
            type="text"
            name="fullname"
            value={formule.fullname}
            onChange={handleInputs}
            className="w-full border-none outline-none"
          />
          <User className="text-secondary" />
        </div>
        {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">
          Password*:
        </label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input
            type={active ? "password" : "text"}
            name="password"
            value={formule.password}
            onChange={handleInputs}
            className="w-full border-none outline-none"
          />
          {active ? (
            <Eye className="cursor-pointer" onClick={() => setActive(false)} />
          ) : (
            <EyeClosed
              className="cursor-pointer"
              onClick={() => setActive(true)}
            />
          )}
        </div>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">
          Address*:
        </label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input
            type="text"
            name="address"
            value={formule.address}
            onChange={handleInputs}
            className="w-full border-none outline-none"
          />
          <User className="text-secondary" />
        </div>
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">Phone*:</label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input
            type="text"
            name="phone"
            value={formule.phone}
            onChange={handleInputs}
            className="w-full border-none outline-none"
          />
          <User className="text-secondary" />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-accent">Image*:</label>
        <div className="flex items-center border rounded shadow h-10 px-2">
          <input type="file" onChange={handleImage} className="w-full" />
          <User className="text-secondary" />
        </div>
        {image && (
          <img
            src={typeof image === "string" ? image : URL.createObjectURL(image)}
            alt="Preview"
            className="w-32 h-32 rounded object-cover mt-2"
          />
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleUpdate}
          disabled={Object.keys(errors).length > 0}
          className={`px-4 py-2 rounded shadow text-white ${
            Object.keys(errors).length > 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500"
          }`}
        >
          Update
        </button>

        <button
          onClick={() => dispatch(logout())}
          className="px-4 py-2 rounded shadow text-white bg-red-500"
        >
          Logout
        </button>
      </div>

      {message && <p className="text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default Profile;
