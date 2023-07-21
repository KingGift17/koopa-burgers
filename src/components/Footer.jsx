import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/ovie-g-bazunu" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://www.linkedin.com/in/ovie-g-bazunu" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/ovie-g-bazunu" target="_blank">
          <Instagram />
        </a>
        <a href="https://github.com/KingGift17" target="_blank">
          <GitHub />
        </a>
      </div>

      <p>
        Made by Ovie G Bazunu
        <br />
        &copy; 2023 TroopKompany
      </p>
    </div>
  );
}

export default Footer;
