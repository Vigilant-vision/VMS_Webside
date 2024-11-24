import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isVisible }) => {
  const [showIPs, setShowIPs] = useState(false);
  const location = useLocation();

  const randomIPs = [
    "192.168.0.1",
    "192.168.0.2",
    "192.168.0.3",
    "192.168.0.4",
  ];

  const handleCameraClick = () => {
    setShowIPs((prevShowIPs) => !prevShowIPs);
  };

  const isActive = (path) => {
    return location.pathname === `/${path}`;
  };

  return (
    <div className={`w-52 z-50 h-[calc(100vh-50px)] bg-dark text-white p-4 box-border fixed top-[50px] left-0 shadow-lg transition-transform transform ${isVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:shadow-none`}>
      <ul className="space-y-4">
        <li>
          <Link to="/">
            <div className={`flex items-center hover:bg-gray-700 transition duration-200 ease-in-out px-2 head-3 py-3 rounded-lg ${isActive("camera") ? "bg-gray-600" : ""}`}>
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                <path d="M12 10a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Camera
            </div>
          </Link>
        </li>
        <li>
          <Link to="/map" className={`flex items-center text-white head-3 hover:bg-gray-700 transition duration-200 ease-in-out px-2 py-3 rounded-lg ${isActive("map") ? "bg-gray-600" : ""}`}>
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 4v16h18V4H3zm14 12H7V6h10v10z" />
            </svg>
            Maps
          </Link>
        </li>
        <li>
          <Link to="/floor-plan" className={`flex head-3 items-center text-white hover:bg-gray-700 transition duration-200 ease-in-out px-2 py-3 rounded-lg ${isActive("floor-plan") ? "bg-gray-600" : ""}`}>
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
            </svg>
            Floor Plan
          </Link>
        </li>
        <li className="flex items-center head-3 hover:bg-gray-700 transition duration-200 ease-in-out px-2 py-3 rounded-lg cursor-pointer">
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
          </svg>
          Access Control
        </li>
      </ul>
      <button className="absolute bottom-5 w-[calc(100%-30px)] bg-red-600 text-white py-2 rounded-lg shadow transition duration-200 hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
