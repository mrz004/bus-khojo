import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ title, style, switchMode }) => {
  return (
    <nav style={style}>
      <h3>{title}</h3>
      <ul>
        <li style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem"}}>
            <input type="checkbox" id="toggleMode" style={{aspectRatio: "1 / 1", width: "1.3em"}} onChange={switchMode}/>
            <label htmlFor="toggleMode">Dark Mode</label>
        </li>
        <li>
          <a style={style} href="/">Home</a>
        </li>
        <li>
          <a style={style} href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Specify some title",
};

export default Navbar;
