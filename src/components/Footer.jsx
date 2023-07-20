import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedIn />
        <Twitter />
        <Instagram />
        <Facebook />
      </div>

      <p>&copy; 2023 TroopKompany </p>
    </div>
  );
}

export default Footer;
