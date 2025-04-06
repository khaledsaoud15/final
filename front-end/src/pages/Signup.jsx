import { Eye, EyeClosed, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="lg:flex lg:items-center h-screen lg:justify-around bg-pattern bg-center bg-cover bg-no-repeat ">
      <section className="lg:static absolute top-1/2 left-1/2 lg:-translate-0 -translate-1/2 h-fit py-3 px-8 space-y-4 rounded shadow border border-gray-200 w-3/4 md:w-2/5 lg:w-1/3 bg-white">
        <h1 className="text-xl font-bold text-gray-900 text-center text-primary">
          Sign Up
        </h1>
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
              />
              <Mail className="text-secondary text-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="block text-sm font-medium text-accent"
              htmlFor="email"
            >
              Username*:
            </label>
            <div className="flex items-center justify-between border border-gray-200 rounded shadow h-10 px-2">
              <input
                type="email"
                className="w-full h-full py-2 px-2 border-none outline-none"
              />
              <User className="text-secondary text-sm" />
            </div>
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
          <div className="flex flex-col gap-2">
            <h4 className="text-base text-accent">Role:</h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="accent-secondary"
                  name="role"
                  value="client"
                  id="client"
                />
                <label htmlFor="client">Client</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="accent-secondary"
                  name="role"
                  value="mechanic"
                  id="mechanic"
                />
                <label htmlFor="mechanic">Mechanic</label>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full rounded bg-accent shadow-lg py-3 text-white cursor-pointer hover:bg-primary">
          Register
        </button>
        <p className="text-xs text-accent text-center md:text-sm lg:text-base">
          Already have an account ?
          <Link to="/login" className="font-extrabold text-secondary underline">
            Login
          </Link>
        </p>
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

export default Signup;
