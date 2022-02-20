import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="https://res.cloudinary.com/dankl8in/video/upload/v1644352250/video-1_xdvmaw.webm" autoPlay loop muted />
      <h1>
        WELCOME <br></br>
        TO MY<br></br>
        PORTFOLIO!
      </h1>
      <p>Come see whats in store.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          Link
          to={{ pathname: "https://github.com/DeonFranklin" }}
          target="Github"
        >
          see my work
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
