import React, { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="relative flex items-center justify-between px-8 md:px-10 lg:px-16 h-18 border-b border-gray-200">
      <img src="./logo.svg" alt="logo" loading="lazy" className="h-full" />
      <div
        className={`flex h-fit flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 justify-between ${
          active ? "h-fit" : "h-0"
        } absolute lg:static top-full left-0 w-full lg:w-3/5 px-4 lg:px-0 transition-all duration-300 ease-in-out overflow-hidden bg-white`}
      >
        <a href="#" className="mt-8 lg:mt-0">
          Home
        </a>
        <a href="#">Contact</a>
        <a href="#">Nearby Shops</a>
        <div className="flex flex-col gap-4 lg:flex-row lg:ml-auto mb-8 lg:mb-0">
          <button className="py-2 px-4 bg-primary text-white rounded cursor-pointer w-fit">
            Signin
          </button>
          <button className="py-2 px-4 border-3 border-primary rounded text-primary  hover:bg-primary w-fit hover:text-white cursor-pointer">
            Signup
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-[3px]  lg:hidden cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="w-4 h-[2px] rounded bg-primary"></span>
        <span className="w-4 h-[2px] rounded bg-primary"></span>
        <span className="w-4 h-[2px] rounded bg-primary"></span>
      </div>
    </nav>
  );
};

export default Nav;
