import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
    <div className="hero-container">
      <h1>
        WELCOME <br></br>
        TO<br></br> 
        MY<br></br>
        PORTFOLIO!
      </h1>
      <p>dream and design with me</p>
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
    </>
  );
}

export default HeroSection;
