import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-15 px-4 py-2 bg-blue-100 rounded-xl justify-center items-center w-1/3 mx-auto mb-10">
      <NavLink to={"/"} className={({ isActive }) => isActive? "text-blue-400" : ""}>
        Home
      </NavLink>
      <NavLink to={"/login"} className={({ isActive }) => isActive? "text-blue-400" : ""}>
        Login
      </NavLink>
      <NavLink to={"/dashboard"} className={({ isActive }) => isActive? "text-blue-400" : ""}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Nav;
