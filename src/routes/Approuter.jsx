import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../screens/HomePage/Home";
import Map from "../screens/Map/Map";
import FloorPlan from "../screens/FloorPlan/FloorPlan";
import LoginScreen from "../screens/Login/Login";
import { useSelector } from "react-redux";

// Function for protecting routes
const ProtectedRoute = ({ token, children }) => {
  return token ? children : <Navigate to="/login" replace />;
};

const Approuter = () => {
  const token = useSelector((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute token={token}><Home /></ProtectedRoute>} />
        <Route path="floor-plan" element={<ProtectedRoute token={token}><FloorPlan /></ProtectedRoute>} />
        <Route path="map" element={<ProtectedRoute token={token}><Map /></ProtectedRoute>} />

        {/* Public route */}
        <Route path="login" element={<LoginScreen />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to={token ? "/" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
