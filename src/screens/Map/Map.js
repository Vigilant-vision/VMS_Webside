import React, { useEffect, useState } from "react";
import Mainlayout from "../../Components/Layout/Mainlayout";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Person from '../../images/person.svg';

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  // Fetch the latest location data from the server every 5 seconds
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://a60f-2401-4900-5c9f-a072-6d78-91c2-818c-a8b7.ngrok-free.app/retrieve-location', {
          method: 'POST',  // Since the server expects POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({})  // Empty body to trigger location fetch
        });
console.log(response)
        if (response.ok) {
          const data = await response.json();
          if (data.location) {
            const { latitude, longitude } = data.location;
            setCurrentPosition({ lat: latitude, lng: longitude });
          }
        } else {
          console.log("No location data available");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    // Set interval to fetch location every 5 seconds
    const interval = setInterval(fetchLocation, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const mapStyles = {
    height: "100%",
    width: "200%",
  };

  return (
    <Mainlayout>
      <div className="main" style={{ height: "83vh" }}>
        <LoadScript googleMapsApiKey="AIzaSyDS3NVLiU1X1JKmED-ecqI97CYMda6P6jA">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={18}
            center={currentPosition || { lat: 21.09760, lng: 85.07240 }} // Default center if location is unavailable
            mapTypeId="satellite"
          >

            {currentPosition && (
              <Marker
                position={currentPosition}
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
