import React, { useState } from "react";

const { useState: useProfileState } = React;

const Navbar = ({ searchTerm, setSearchTerm, onProfileClick }) => (
  <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-6 py-4 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-center sm:text-left bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
        CampusBite 🍽️
      </h1>

      {/* Search bar */}
      <div className="flex-1 flex justify-center sm:justify-center max-w-md mx-auto">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search delicious food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-3 pl-12 rounded-2xl text-gray-800 w-full focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg transition-all duration-300 hover:shadow-xl"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Profile button */}
      <div className="flex justify-center sm:justify-end">
        <button 
            onClick={onProfileClick}
            className="bg-white text-green-600 px-6 py-3 rounded-2xl hover:bg-green-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          👤 Profile
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
