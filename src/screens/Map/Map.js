import React, { useEffect, useState, useRef } from "react";
import Mainlayout from "../../Components/Layout/Mainlayout";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Person from '../../images/person.svg';
import { useSelector } from "react-redux";
import axios from 'axios';

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const mapRef = useRef(null); // Reference to the map instance
  const token = useSelector((state) => state.token);

  // Fetch the latest location data from the watch every 5 seconds
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const payload = {
          Token: token,
          OperationType: 'GetMyTracker',
          InformationType: 'Product',
          LanguageType: '2B72ABC6-19D7-4653-AAEE-0BE542026D46',
          Arguments: JSON.stringify({ TrackerType: "0" }),
        };

        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'http://www.overseetracking.com/',
        };

        const response = await axios.post(
          'http://api.overseetracking.com/WebProcessorApi.ashx',
          new URLSearchParams(payload),
          { headers }
        );

        if (response?.data?.Data?.Position?.length > 0) {
          const { Latitude, Longitude } = response.data.Data.Position[0];
          setCurrentPosition({ lat: Latitude, lng: Longitude });
        } else {
          console.log("No location data available");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    // Fetch location initially and every 5 seconds
    fetchLocation();
    const interval = setInterval(fetchLocation, 30000);
    return () => clearInterval(interval);
  }, []);

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  // Map's default center if no data is available yet
  const defaultCenter = { lat: 20.28077, lng: 85.82090 };

  return (
    <Mainlayout>
      <div className="main" style={{ height: "83vh" }}>
        <LoadScript googleMapsApiKey="AIzaSyDS3NVLiU1X1JKmED-ecqI97CYMda6P6jA">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={12}
            center={defaultCenter} // Keep map's center static
            mapTypeId="satellite"
            onLoad={(map) => (mapRef.current = map)} // Reference the map instance
          >
            {currentPosition && (
              <Marker
                position={currentPosition} // Only update the marker's position
                icon={Person}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </Mainlayout>
  );
};

export default Home;
