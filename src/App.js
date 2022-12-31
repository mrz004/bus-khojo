import React, { useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyMap from "./components/MyMap";
import config from "./config";

function App() {
  document.title = config.projectName;


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
      <div
        style={{display: "grid", placeItems: "center" }}
      >
        <MyMap apiKey={config.apiKey} />
      </div>
      <Footer style={myStyle} />
    </div>
  );
}

export default App;
