import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl">
      <span className="text-xl font-semibold text-blue-800">Shiv Pharma</span>

      <div className="relative w-full max-w-xs">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
        <input
          className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="search"
          placeholder="Search"
        />
      </div>

      <div className="flex gap-4">
        <span className="cursor-pointer text-blue-400">Contact Us </span>
        <span className="cursor-pointer text-blue-400">About</span>
      </div>
    </div>
  );
};

export default Header;
