import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-red-500">
        <Link to="/">Airbnb</Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Search destinations"
          className="outline-none w-40 sm:w-64"
        />
        <button className="bg-red-500 text-white rounded-full px-3 py-1 ml-2 hover:bg-red-600">
          Search
        </button>
      </div>

      {/* Right: Menu */}
      <div className="flex items-center space-x-4">
        <Link to="/host" className="hover:underline">
          Become a host
        </Link>
        <button className="bg-gray-100 rounded-full px-3 py-1 hover:bg-gray-200">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
