import React, { useEffect, useState } from "react";
import Mainlayout from "../../Components/Layout/Mainlayout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import axios from "axios";
import L from "leaflet"; // Leaflet library for map

// Custom Person icon for marker
import Person from '../../images/person.svg';

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const token = useSelector((state) => state.token);

  // Fetch the latest location data from the API every 30 seconds
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://vigilantvisionsystem.com/ec2/api/v1/oversees/track-data",
          {
            params: {
              token: token, // Pass the token as a query parameter
            },
          }
        );

        if (response?.data?.success && response?.data?.data?.Data?.Position?.length > 0) {
          const { Latitude, Longitude } = response.data.data.Data.Position[0];
          setCurrentPosition({ lat: Latitude, lng: Longitude });
        } else {
          console.log("No location data available");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    // Fetch location initially and every 30 seconds
    fetchLocation();
    const interval = setInterval(fetchLocation, 30000);
    return () => clearInterval(interval);
  }, [token]);

  // Default map center if no location is available
  const defaultCenter = { lat: 20.28077, lng: 85.82090 };

  return (
    <Mainlayout>
      <div className="main" style={{ height: "83vh" }}>
        <MapContainer
          center={currentPosition || defaultCenter} // Map center based on current position or default
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          {/* TileLayer for background map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add Marker for current position */}
          {currentPosition && (
            <Marker
              position={currentPosition}
              icon={new L.Icon({
                iconUrl: Person, // Custom icon for the marker
                iconSize: [25, 25],
                iconAnchor: [12, 12],
                popupAnchor: [0, -12],
              })}
            >
              <Popup>Current Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </Mainlayout>
  );
};

export default Home;
