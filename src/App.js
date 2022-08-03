import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App({title}) {
  const [navStyle, setNavStyle] = useState({
    color: "black",
    backgroundColor: "#eee",
  });

  const switchMode = () => {
    if (navStyle.color === "black") setNavStyle({ color: "#eee", backgroundColor: "black" });
    else setNavStyle({ color: "black", backgroundColor: "#eee" });
  };
  return (
    <>
      <Navbar title={title} style={navStyle} switchMode={switchMode} />
    </>
  );
}

export default App;
