import React from "react";
import Home from "../Pages/Home";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white px-3 font-bold border border-gray-300 flex">
      <div className="container mx-auto  flex gap-10 items-center">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="../logo192.png"
            alt="Logo"
            style={{ width: "80px", height: "80px" }}
          />
        </a>
        <div className="flex space-x-16 text-3xl">
          <a
            href="/"
            className="text-black hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black hover:text-gray-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/blogs"
            className="text-black hover:text-gray-300 transition-colors duration-300"
          >
            Blogs
          </a>
        </div>
      </div>
      <div className="mx-auto  flex gap-10 items-center text-3xl">
        <Link to="/login">Login</Link>
        <NavLink
          to="/register"
          style={(isActive) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Register
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
