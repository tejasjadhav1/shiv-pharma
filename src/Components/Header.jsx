import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import neuroPhoto from "./images/neuro.jpeg"; // ✅ same image as Home

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative sticky top-0 z-50 text-white"
      style={{
        display: 'none',
        backgroundImage: `url(${neuroPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent gradient overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      <div className="relative flex items-center justify-between p-4 backdrop-blur-sm">
        {/* Logo */}
        <span className="text-xl font-semibold">Shiv Pharma</span>

        {/* Search Bar */}
        <div className="hidden sm:block relative w-full max-w-xs mx-4">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-white/20 text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-md"
            type="search"
            placeholder="Search"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 font-medium">
          <span className="cursor-pointer hover:text-blue-200 transition">Contact Us</span>
          <span className="cursor-pointer hover:text-blue-200 transition">About</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="relative sm:hidden mt-4 flex flex-col gap-4 font-medium px-4 pb-4 backdrop-blur-sm">
          <input
            className="w-full pl-10 pr-4 py-2 bg-white/20 text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 backdrop-blur-md"
            type="search"
            placeholder="Search"
          />
          <span className="cursor-pointer hover:text-blue-200 transition">Contact Us</span>
          <span className="cursor-pointer hover:text-blue-200 transition">About</span>
        </div>
      )}
    </header>
  );
};

export default Header;
