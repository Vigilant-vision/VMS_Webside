import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/HomePage/Home";
import Map from "../screens/Map/Map";
import FloorPlan from "../screens/FloorPlan/FloorPlan";
import LoginScreen from "../screens/Login/Login";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="floor-plan" element={<FloorPlan />} />
        <Route path="map" element={<Map />} />
        <Route path="login" element={<LoginScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
