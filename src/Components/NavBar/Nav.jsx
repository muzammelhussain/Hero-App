import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/img/logo.png";
import Git from "../../assets/img/Vector.png";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-2 border-[#632EE3]"
              : "text-gray-600 hover:text-[#632EE3]"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full mx-auto">
      <div className="w-full navbar bg-base-100 shadow-sm">
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
              {links}
            </ul>
          </div>
          <Link>
            <div className="btn btn-ghost text-xl">
              <img className="w-8 h-8" src={Logo} alt="" />
              <p>Hero</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
            href="https://github.com/muzammelhussain"
          >
            <img src={Git} alt="" /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
