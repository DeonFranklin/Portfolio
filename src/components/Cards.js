import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>All the pixels of me</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              img
              src="https://res.cloudinary.com/dankl8in/image/upload/v1644352086/Profpic_s5nlfm.png"
              text="Learn More About Me"
              label="About Me"
              path="/AboutMe"
            />
            <CardItem
              src="https://res.cloudinary.com/dankl8in/image/upload/v1644352086/github_tdtotg.jpg"
              text="Check out some of my work"
              label="Projects"
              Link
              to={{ pathname: "https://github.com/DeonFranklin" }}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              img
              src="https://res.cloudinary.com/dankl8in/image/upload/v1644352085/connectionmap_q0ft3i.webp"
              text="Let's Connect and Exchange Ideas"
              label="Socials"
              path="/Socials"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
