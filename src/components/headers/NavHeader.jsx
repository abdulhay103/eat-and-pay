import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eat-icon.jpg";

const NavHeader = () => {
  return (
    <header className=" w-full sticky border-b-2 border-gray-500 bg-white">
      <div className=" flex justify-between container mx-auto py-2 items-center">
        <div className=" flex items-center">
          <Link to="/" className=" w-12 h-12">
            <img src={logo} alt="Logo" />
          </Link>
          <span className=" text-lg font-medium text-orange-600 pl-2">
            Eat & Pay
          </span>
        </div>
        <nav className=" flex">
          <li className=" list-none pl-5">
            <Link
              to="/"
              className=" text-xl font-bold text-orange-500 hover:text-lime-500"
            >
              Home
            </Link>
          </li>
          <li className=" list-none pl-5">
            <Link
              to="/about"
              className=" text-xl font-bold text-orange-500 hover:text-lime-500"
            >
              About
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
