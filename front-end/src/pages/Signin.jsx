import axios from "axios";
import { Eye, EyeClosed, Mail } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../app/auth/authSlice";

const Signin = () => {
  const [active, setActive] = useState(true);
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const { message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlInputs = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    // API call to register user
    dispatch(loginUser(formData));
    setFormdata({
      email: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <div className="lg:flex lg:items-center h-screen lg:justify-around bg-pattern bg-center bg-cover bg-no-repeat ">
      <section className="lg:static absolute top-1/2 left-1/2 lg:-translate-0 -translate-1/2 h-fit py-3 px-8 space-y-4 rounded shadow border border-gray-200 w-3/4 md:w-2/5 lg:w-1/3 bg-white">
        <h1 className="text-xl font-bold  text-center text-primary">Sign In</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-accent"
              htmlFor="email"
            >
              Email:
            </label>
            <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
              <input
                type="email"
                className="w-full h-full py-2 px-2 border-none outline-none"
                name="email"
                onChange={handlInputs}
                value={formData.email}
              />
              <Mail className="text-secondary text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-accent"
              htmlFor="password"
            >
              Password:
            </label>
            <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
              <input
                type={active ? "password" : "text"}
                className="w-full h-full py-2 px-2 border-none outline-none"
                name="password"
                onChange={handlInputs}
                value={formData.password}
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
          </div>
        </div>
        <p className="text-right underline text-secondary text-xs md:text-sm lg:text-base cursor-pointer">
          Forgot password?
        </p>
        <button
          onClick={login}
          className="w-full rounded bg-accent shadow-lg py-3 text-white cursor-pointer hover:bg-primary"
        >
          Login
        </button>
        <p className="text-xs text-accent text-center md:text-sm lg:text-base">
          Don't have an account ?
          <Link
            to="/register"
            className="font-extrabold text-secondary underline cursor-pointer"
          >
            Register
          </Link>
        </p>
        <p className="text-green-500 text-center">{message}</p>
      </section>
      <img
        src="./car.png"
        alt="car"
        loading="lazy"
        className="hidden lg:flex lg:w-1/3 filtershadow"
      />
    </div>
  );
};

export default Signin;
