import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-black flex justify-between items-center px-6 py-2">
      <h1 className="font-bold text-[20px] lg:text-3xl text-white">
        Courses.co
      </h1>

      <nav className="flex-grow flex text-lg gap-7 items-center justify-center font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-white"
          }
        >
          DashBoard
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-purple-300" : "text-white"
          }
        >
          Courses
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
