import React from "react";
import Bio from "../Bio";
import DevCards from "../DevCards";
import "../../components/pages/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="bio">
      <Bio />
      </div>
      <div className="experience">
        <h3 id="experience">Experience</h3>
        <p>
          Here's a list of the languages and frameworks I have experience with:
        </p>
        <div className="dev_cards__container">
        <div className="dev_cards__wrapper">
          <ul className="dev_cards__items">
        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
        />
        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />

        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
        />
        
        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        />

        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
        />

        <DevCards
          img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
        />
        </ul>
        </div>
      </div>
      </div>
    </>
  );
}
