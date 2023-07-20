import React from "react";
import Logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />{" "}
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
