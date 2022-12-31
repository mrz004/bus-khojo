import React, { useState } from "react";
import "./styles/MainComponent.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainComponent = ({ config}) => {
  
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "#eee",
  });

  const switchMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({ color: "#eee", backgroundColor: "black" });
    } else {
      setMyStyle({ color: "black", backgroundColor: "#eee" });
    }
  };

  return (
    <div className="mainContainer">
      <Navbar
        title={config.projectName}
        style={myStyle}
        switchMode={switchMode}
      />
      <Outlet />
      <Footer style={myStyle} />
    </div>
  );
};

export default MainComponent;
