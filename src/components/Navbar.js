import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ title }) => {
    const [style, setStyle] = useState({color:black, backgroundColor:"white"});
  return (
    <nav>
      <h3>{title}</h3>
      <ul>
        <li>
            <input type="checkbox" id="toggleMode" />
            <label htmlFor="toggleMode">Dark Mode</label>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
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
