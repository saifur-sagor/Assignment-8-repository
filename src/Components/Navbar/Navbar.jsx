import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
            <li>
              <a>Instalation</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} className="w-[20px] h-[20px]" />
          <a className="text-xl font-semibold text-purple-500">HERO.APP</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps">
              <FaAppStore />
              Apps
            </Link>
          </li>
          <li>
            <a>
              <MdOutlineInstallDesktop />
              Instalation
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-purple-700 hover:bg-purple-500">
          <IoLogoGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
