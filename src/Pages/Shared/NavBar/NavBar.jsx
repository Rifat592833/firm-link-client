import React from "react";
import { Link, NavLink } from "react-router";
import FirstLogo from "../FirstLogo/FirstLogo";
import UseAuth from "../../../Hooks/UseAuth";

const NavBar = () => {
  const { user,LogOut } = UseAuth();
  console.log("USER:", user);

  const handleLogOut = () =>{
    LogOut()
    .then(result =>{console.log(result)})
    .catch(error =>{console.log(error)})
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold underline underline-offset-4"
              : "text-white font-semibold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold underline underline-offset-4"
              : "text-white font-semibold"
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold underline underline-offset-4"
              : "text-white font-semibold"
          }
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold underline underline-offset-4"
              : "text-white font-semibold"
          }
        >
          Coverage
        </NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar bg-custom-color shadow-sm rounded-2xl mt-2 mb-5 sticky top-0 z-50 px-2 md:px-4">

      {/* NAVBAR START */}
      <div className="navbar-start flex items-center gap-2">

        {/* MOBILE MENU */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-custom-color rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>

        {/* LOGO */}
          <div   className="btn btn-ghost p-0 ml-2 flex items-center gap-2">

                   <FirstLogo />
          </div>
        
          
    
          
      </div>

      {/* NAVBAR CENTER (DESKTOP) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          {navItems}
        </ul>
      </div>

      {/* NAVBAR END */}
      <div className="navbar-end flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
        <Link
          to="/farmerRegister"
          className="btn-primary-custom text-sm md:text-base"
        >
          Farmer Registration
        </Link>

        <div>
          {user ? 
          <button onClick={handleLogOut} className="btn-primary-custom text-sm md:text-base">Log Out</button>
          :
          <Link
          to="/login"
          className="btn-primary-custom text-sm md:text-base"
        >
          Login
        </Link>
          
        }
        </div>

        <Link
          to="/register"
          className="btn-primary-custom text-sm md:text-base"
        >
          Register
        </Link>
      </div>
      <div>
        <p>{user}</p>
      </div>
    </div>
  );
};

export default NavBar;
