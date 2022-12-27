import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyMap from "./components/MyMap";

function App({ title }) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "#eee",
  });

  const switchMode = () => {
    if (myStyle.color === "black")
      setMyStyle({ color: "#eee", backgroundColor: "black" });
    else setMyStyle({ color: "black", backgroundColor: "#eee" });
  };

  return (
    <>
      <Navbar title={title} style={myStyle} switchMode={switchMode} />
      <main
        style={{ Height: "90vh", display: "grid", placeItems: "center" }}
      >
        <MyMap />
      </main>
      <Footer style={myStyle} />
    </>
  );
}

export default App;
