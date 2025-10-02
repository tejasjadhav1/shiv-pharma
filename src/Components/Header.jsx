import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 rounded-xl sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-semibold text-blue-800">Shiv Pharma</span>

        {/* Search Bar */}
        <div className="hidden sm:block relative w-full max-w-xs mx-4">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
          <input
            className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-blue-500 font-medium">
          <span className="cursor-pointer hover:text-blue-700">Contact Us</span>
          <span className="cursor-pointer hover:text-blue-700">About</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 text-blue-500 font-medium">
          <input
            className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search"
          />
          <span className="cursor-pointer hover:text-blue-700">Contact Us</span>
          <span className="cursor-pointer hover:text-blue-700">About</span>
        </div>
      )}
    </header>
  );
};

export default Header;
