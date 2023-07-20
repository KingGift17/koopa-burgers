import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/marioYellowBackground.jpg";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Koopa Burgers</h1>
        <p>BURGERS EVEN BOWSER WOULD WANT</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
