import React from "react";
import { Linking } from "react-native";
import "../../components/pages/Connect.css";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

export default function AboutMe() {
  return (
    <>
      <h1 className="connect">Connect with Me</h1>
      <br />
      <div className="social-container-connect">
        <MDBContainer>
          <a
            href="https://www.linkedin.com/in/deondfranklin/"
            className="li-float"
          >
            <MDBBtn size="xl" tag="a" floating social="li">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </a>
          <a href="https://github.com/DeonFranklin" className="gh-float">
            <MDBBtn size="lg" tag="a" floating social="git">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </a>
          <a href="deonthedev@gmail.com" className="em-float">
            <MDBBtn
              onPress={() =>
                Linking.openURL(
                  "mailto:deonthedev@gmail.com?subject=SendMail&body=Description"
                )
              }
              title="deonthedev@gmail.com"
              size="lg"
              tag="a"
              floating
              social="email"
            >
              <MDBIcon icon="envelope" />
            </MDBBtn>
          </a>
          <a href="#!" className="res-float">
            <MDBBtn size="lg" tag="a" floating social="comm">
              <MDBIcon icon="comments" />
            </MDBBtn>
          </a>
        </MDBContainer>
      </div>
    </>
  );
}
