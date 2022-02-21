import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>More about me</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <video
              src="https://res.cloudinary.com/dankl8in/video/upload/v1644352250/video-1_xdvmaw.webm"
              autoPlay
              loop
              muted
            />

            <CardItem
              img
              src="https://res.cloudinary.com/dankl8in/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_black,b_rgb:262c35/v1645472895/Prof_pic_vvb5v5.png"
              text="Learn More About Me"
              path="/AboutMe"
            />
            <CardItem
              src="https://res.cloudinary.com/dankl8in/image/upload/v1644352086/github_tdtotg.jpg"
              text="Check out some of my work"
              Link
              to={{ pathname: "https://github.com/DeonFranklin" }}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              img
              src="https://res.cloudinary.com/dankl8in/image/upload/v1644352085/connectionmap_q0ft3i.webp"
              text="Let's Connect and Exchange Ideas"
              path="/connect"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
