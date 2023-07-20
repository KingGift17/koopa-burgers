import React from "react";
import BannerImage from "../assets/marioBackground.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Koopa's Burgers, a one-of-a-kind burger joint inspired by
          the beloved Koopa Troopa from the iconic Mario Bros. series. Just like
          our adventurous namesake, we strive to bring bold and exciting flavors
          to your plate. At Koopa's Burgers, we're passionate about crafting the
          perfect burger experience, using only the freshest and highest quality
          ingredients. Our burgers are a fusion of classic and creative, paying
          homage to the Koopa Troopa's adventurous spirit. Whether you're in the
          mood for a traditional cheeseburger or a daring specialty creation,
          our menu caters to all taste buds. With a cozy and family-friendly
          atmosphere, Koopa's Burgers is the ultimate destination for burger
          enthusiasts of all ages. Join us and embark on a taste adventure that
          will have you coming back for more, just like Mario chases those pesky
          Koopa Troopas!
        </p>
      </div>
    </div>
  );
}

export default About;
