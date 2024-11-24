import React from "react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-dark text-white fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 h-[60px] shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="headerLogo flex items-center space-x-2 no-underline">
          <h2 className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors">
            VVS DASHBOARD
          </h2>
        </Link>
      </div>

      <div className="search-container flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 py-2 px-4 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div className="profile-logo flex items-center space-x-4">
        <Link to="/notifications" className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-200 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 15V11a7 7 0 10-14 0v4c0 .374-.146.735-.405 1.005L2 17h5m5 4a3 3 0 01-6 0"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full border-2 border-dark"></span>
        </Link>
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer transition-transform transform hover:scale-105"
          />
          <div className="absolute top-12 right-0 w-48 p-3 hidden bg-white text-gray-700 shadow-lg rounded-lg group-hover:block">
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 rounded-md">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-red-100 rounded-md">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
