import React from "react";
import "./styles/ToggleButton.css";

const ToggleButton = ({ myId, onChange, myStyle }) => {
  return (
    <span style={myStyle}>
      <input type="checkbox" data-type="toggleButton" id={myId} style={{display: "none"}} onChange={onChange} />
      <label htmlFor={myId}><span></span></label>
    </span>
  );
};

export default ToggleButton;
