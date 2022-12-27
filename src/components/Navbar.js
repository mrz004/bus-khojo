import React from "react";
import PropTypes from "prop-types";
import "./styles/Navbar.css";

const Navbar = ({ title, style, switchMode }) => {
  return (
    <nav style={{...style, minHeight: "5vh"}}>
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
          <input
            type="checkbox"
            id="toggleMode"
            style={{ aspectRatio: "1 / 1", width: "1.3em" }}
            onChange={switchMode}
          />
          <label htmlFor="toggleMode">Dark Mode</label>
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
