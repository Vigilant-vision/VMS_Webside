import React, { useEffect, useState } from "react";
import Mainlayout from "../../Components/Layout/Mainlayout";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Person from '../../images/person.svg'
import { Kalinga } from "./data";

const coordinates = [
  { lat: 20.2980456, lng: 85.8491677 },
  { lat: 20.2980478, lng: 85.8491674 },
  { lat: 20.2980507, lng: 85.849167 },
  { lat: 20.2980541, lng: 85.849167 },
  { lat: 20.2980573, lng: 85.8491667 },
  { lat: 20.2980604, lng: 85.849167 },
  { lat: 20.2980629, lng: 85.849167 },
  { lat: 20.2980667, lng: 85.849167 },
  { lat: 20.2980705, lng: 85.849167 },
  { lat: 20.2980746, lng: 85.849167 },
  { lat: 20.298078, lng: 85.8491664 },
  { lat: 20.2980818, lng: 85.8491657 },
  { lat: 20.2980875, lng: 85.849166 },
  { lat: 20.2980912, lng: 85.8491657 },
  { lat: 20.2980947, lng: 85.8491654 },
  { lat: 20.2980981, lng: 85.8491654 },
  { lat: 20.2981019, lng: 85.849165 },
  { lat: 20.2981057, lng: 85.849165 },
  { lat: 20.2981095, lng: 85.8491647 },
  { lat: 20.2981126, lng: 85.8491644 },
  { lat: 20.2981161, lng: 85.8491644 },
  { lat: 20.2981211, lng: 85.8491644 },
  { lat: 20.2981258, lng: 85.8491644 },
  { lat: 20.2981287, lng: 85.8491644 },
  { lat: 20.2981315, lng: 85.849164 },
  { lat: 20.298134, lng: 85.849164 },
  { lat: 20.2981415, lng: 85.8491647 },
  { lat: 20.2981415, lng: 85.849168 },
  { lat: 20.2981422, lng: 85.8491711 },
  { lat: 20.2981422, lng: 85.8491734 },
  { lat: 20.2981422, lng: 85.8491764 },
  { lat: 20.2981428, lng: 85.8491811 },
  { lat: 20.2981425, lng: 85.8491851 },
  { lat: 20.2981422, lng: 85.8491885 },
  { lat: 20.2981412, lng: 85.8491935 },
  { lat: 20.2981397, lng: 85.8491989 },
  { lat: 20.2981371, lng: 85.8492002 },
  { lat: 20.2981359, lng: 85.8491976 },
  { lat: 20.2981356, lng: 85.8491912 },
  { lat: 20.2981277, lng: 85.8491908 },
  { lat: 20.2981258, lng: 85.8491885 },
  { lat: 20.2981258, lng: 85.8491862 },
  { lat: 20.2981255, lng: 85.8491838 },
  { lat: 20.2981249, lng: 85.8491798 },
  { lat: 20.2981246, lng: 85.8491761 },
  { lat: 20.298122, lng: 85.8491751 },
  { lat: 20.2981198, lng: 85.8491751 },
  { lat: 20.2981173, lng: 85.8491761 },
  { lat: 20.2981139, lng: 85.8491761 },
  { lat: 20.2981082, lng: 85.8491778 },
  { lat: 20.2981019, lng: 85.8491778 },
  { lat: 20.2980991, lng: 85.8491788 },
  { lat: 20.2981007, lng: 85.8491821 },
  { lat: 20.2981032, lng: 85.8491821 },
  { lat: 20.2981013, lng: 85.8491848 },
  { lat: 20.2980985, lng: 85.8491848 },
  { lat: 20.2980956, lng: 85.8491818 },
  { lat: 20.2980919, lng: 85.8491821 },
  { lat: 20.2980878, lng: 85.8491825 },
  { lat: 20.2980843, lng: 85.8491825 },
  { lat: 20.2980831, lng: 85.8491858 }
];

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    let index = 0;
    if (coordinates.length > 0) {
      const interval = setInterval(() => {
        setCurrentPosition(coordinates[index]);
        index = (index + 1) % coordinates.length; // Loop through the coordinates
      }, 1000); // Move every second

      return () => clearInterval(interval); 
    }
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
            zoom={40}
            center={currentPosition || { lat: 20.2983033, lng: 85.849076 }} // Default center
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