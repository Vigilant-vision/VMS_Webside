import React from "react";
import { Link } from "react-router-dom";

const PageChangePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Change Page</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/map" className="block text-blue-600 hover:underline" onClick={onClose}>
              Maps
            </Link>
          </li>
          <li>
            <Link to="/floor-plan" className="block text-blue-600 hover:underline" onClick={onClose}>
              Floor Plan
            </Link>
          </li>
          <li>
            <Link to="/access-control" className="block text-blue-600 hover:underline" onClick={onClose}>
              Access Control
            </Link>
          </li>
          <li>
            <Link to="/camera" className="block text-blue-600 hover:underline" onClick={onClose}>
              Camera
            </Link>
          </li>
        </ul>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PageChangePopup;
