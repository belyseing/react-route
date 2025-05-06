import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex space-x-6">
        <NavLink
          to="/"
          className="text-white text-lg hover:text-gray-400"
          activeClassName="text-gray-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/users/1"
          className="text-white text-lg hover:text-gray-400"
          activeClassName="text-gray-300"
        >
          User 1
        </NavLink>
        <NavLink
          to="/users/2"
          className="text-white text-lg hover:text-gray-400"
          activeClassName="text-gray-300"
        >
          User 2
        </NavLink>
        <NavLink
          to="/users/3"
          className="text-white text-lg hover:text-gray-400"
          activeClassName="text-gray-300"
        >
          User 3
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
