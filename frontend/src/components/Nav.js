import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/" className="home-button">
          Home
        </Link>
        <Link to="/about" className="home-button">
          About
        </Link>
        <a href="https://drive.google.com/file/d/1gxvtYJCwGt3SWpf6SZd5K1iFc2CqnPyS/view?usp=sharing" className="home-button">
          Resume
        </a>
        <Link to="/contact" className="home-button">
          Contact
        </Link>
      </div>
    );
  }
}

export default Nav;
