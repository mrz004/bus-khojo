import React from "react";
import PropTypes from "prop-types";
import "./styles/Navbar.css";
import ToggleButton from "./ToggleButton";

const Navbar = ({ title, style, switchMode }) => {
  return (
    <nav style={style}>
      <h3>
        {title}
        <div
          className="hambug"
          onClick={() => {
            const navList = document.querySelector("nav > ul");
            const compStyle = getComputedStyle(navList);

            if (compStyle.display === "none") navList.style.display = "flex";
            else navList.style.display = "none";
          }}
        >
          &#9776;
        </div>
      </h3>
      <ul>
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <ToggleButton myId="toggleMode" onChange={switchMode} />
          <label
            style={{
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
            htmlFor="toggleMode"
          >
            Dark Mode
          </label>
        </li>
        <li>
          <a style={style} href="/">
            Home
          </a>
        </li>
        <li>
          <a style={style} href="/about">
            About
          </a>
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
