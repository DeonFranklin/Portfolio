import React from "react";
import "../../components/pages/Connect.css";
import CardItem from "../CardItem";

export default function AboutMe() {
  return (
    <>
      <h1 className="connect">Want to connect with me?</h1>
      <div className="social__wrapper">
        <CardItem
          img
          src="https://res.cloudinary.com/dankl8in/image/upload/v1645473334/c54dun8kektznrlav9lf.png"
          text="Resume"
          Link
              to={{ pathname: "https://resume.io/r/o1LkuT187" }}
        />
        <CardItem
          img
          src="https://res.cloudinary.com/dankl8in/image/upload/v1645473980/du5gih3rlkat2wu5g5ch.png"
          text="Github"
          Link
              to={{ pathname: "https://github.com/DeonFranklin" }}
        />
        <CardItem
          img
          src="https://res.cloudinary.com/dankl8in/image/upload/v1645471118/linkedin_ox4tok.png"
          text="LinkedIn"
          Link
              to={{ pathname: "https://www.linkedin.com/in/deondfranklin/" }}
        />
        <CardItem
          img
          src="https://res.cloudinary.com/dankl8in/image/upload/v1645471097/g_ss4k6f.png"
          a href="mailto:deonthedev@gmail.com"
          text="Gmail"
        />
      </div>
    </>
  );
}
