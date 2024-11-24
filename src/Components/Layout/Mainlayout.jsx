import React, { useState } from "react";
import Headr from "../Header/Headr";
import Sidebar from "../sidebar/Sidebar";

const Mainlayout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="bg-black h-screen flex overflow-hidden">
      <Sidebar isVisible={isSidebarVisible} />
      <div className="flex flex-col flex-grow  mt-12 h-[calc(100vh-3rem)] overflow-hidden">
        <button className="md:hidden p-2 bg-blue-600 text-white rounded-lg" onClick={toggleSidebar}>
          {isSidebarVisible ? 'Hide Menu' : 'Show Menu'}
        </button>
        <Headr />
        <main className="flex-grow p-5 box-border">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Mainlayout;
