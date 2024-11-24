import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import floorPlan from './sampleplan.png'; // Adjust path
import Mainlayout from '../../Components/Layout/Mainlayout';

const bounds = [
  [0, 0], // Top-left corner
  [28, 53.75], // Bottom-right corner (scaled in feet, adjust accordingly)
];

const FloorPlan = () => {
  return (
    <Mainlayout>
      <MapContainer
        center={[14, 26]} // Adjusted to center the map
        zoom={1} // Initial zoom level
        minZoom={0.5} // Allow zooming out more
        maxZoom={10} // Increased max zoom for more detail
        scrollWheelZoom={true} // Enabled zooming with scroll
        doubleClickZoom={true} // Allow zooming via double-click
        dragging={true} // Allow dragging of the map
        style={{ height: '100vh', width: '100%' }}
        crs={L.CRS.Simple} // Using flat projection for indoor maps
      >
        <ImageOverlay
          url={floorPlan}
          bounds={bounds}
        />
      </MapContainer>
    </Mainlayout>
  );
};

export default FloorPlan;
