import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gagan Sankhla </span>
            hailing from <span className="purple"> Rajashan, India.</span>
            <br />I recently completed my B.Tech in Computer Science and Engineering from Ahmedabad University. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Video
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embracing code and creativity, I journey through the digital realms"{" "}
          </p>
          <footer className="blockquote-footer">ChatGPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
