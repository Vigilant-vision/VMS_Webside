import React, { useEffect, useState } from "react";
import Mainlayout from "../../Components/Layout/Mainlayout";
import Video from '../../assets/videos/video.mp4';
import { useSelector } from "react-redux";

const alertData = [
  {
    Intrusion: "Zone1",
    DandT: "9072024-3:04pm",
    Camera: "HikVision",
    Ip: "192.168.11.19",
    Severity: "1"
  },
  {
    Intrusion: "Zone2",
    DandT: "9072024-3:15pm",
    Camera: "Axis",
    Ip: "192.168.11.20",
    Severity: "2"
  },
  {
    Intrusion: "Zone3",
    DandT: "9072024-3:27pm",
    Camera: "Bosch",
    Ip: "192.168.11.21",
    Severity: "3"
  }
];

const coordinates = [
  { lat: 20.2980456, lng: 85.8491677 },
  { lat: 20.2980478, lng: 85.8491674 },
  // Add other coordinates...
];

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [alerts, setAlerts] = useState(alertData);

  const token = useSelector((state) => state.token);
  // Adjust for combined reducers

  useEffect(() => {
    console.log("Token:", token);
  }, [token]);

  useEffect(() => {
    let index = 0;
    if (coordinates.length > 0) {
      const interval = setInterval(() => {
        setCurrentPosition(coordinates[index]);
        index = (index + 1) % coordinates.length; // Loop through the coordinates
      }, 10000); // Move every 10 seconds

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const timers = alerts.map((alert, index) => {
      return setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
      }, 200000);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [alerts]);

  const handleRemoveAlert = (index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
  };

  return (
    <Mainlayout>
      <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col h-full p-0 overflow-hidden"> {/* Added overflow-hidden to the main container */}
      <div className="flex-1 gap-2 flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 h-full overflow-y-auto md:max-h-[600px]">            <div className="w-full flex-1 overflow-hidden relative"> {/* First Video Container */}
              <video
                src={Video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full flex-1 overflow-hidden relative"> {/* Second Video Container */}
              <video
                src={Video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full flex-1 overflow-hidden relative"> {/* Third Video Container */}
              <video
                src={Video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute"
              />
            </div>
            <div className="w-full flex-1 overflow-hidden relative"> {/* Fourth Video Container */}
              <video
                src={Video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover absolute"
              />
            </div>
          </div>
        </div>




        <div
          className="w-full md:w-1/3 lg:w-1/4 max-h-[640px] overflow-y-auto bg-gray-900 p-4 rounded-md shadow-md border border-gray-700 md:ml-4 mt-4 md:mt-0"
          style={{
            scrollbarWidth: 'none', /* For Firefox */
            msOverflowStyle: 'none', /* For Internet Explorer and Edge */
          }}
        >
          <div className="text-lg font-bold head-1 text-gray-200 mb-4  border-b border-gray-600 pb-2">
            Alert Notifications
          </div>
          {alerts.map((alert, index) => (
            <div key={index} className="bg-gray-800 p-4 mb-4 rounded-md border border-gray-600 shadow-lg transition-colors hover:bg-gray-700">
              <strong className="text-red-500">Intrusion:</strong> <span className="text-gray-300">{alert.Intrusion}</span> <br />
              <strong className="text-blue-400">Date & Time:</strong> <span className="text-gray-300">{alert.DandT}</span> <br />
              <strong className="text-green-400">Camera:</strong> <span className="text-gray-300">{alert.Camera}</span> <br />
              <strong className="text-yellow-500">IP Address:</strong> <span className="text-gray-300">{alert.Ip}</span> <br />
              <strong className="text-pink-500">Severity:</strong> <span className="text-gray-300">{alert.Severity}</span> <br />
              <button
                onClick={() => handleRemoveAlert(index)}
                className="bg-red-500 text-white px-3 py-1 mt-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </div>
    </Mainlayout>
  );
};

export default Home;
