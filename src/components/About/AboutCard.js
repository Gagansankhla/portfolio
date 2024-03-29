import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />I recently completed my B.Tech in Computer Science and
            Engineering from Ahmedabad University. Currently, in Canada for PGDW
            in Web Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel a lot!!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embracing code and creativity, I journey through the digital
            realms"{" "}
          </p>
          <footer className="blockquote-footer">ChatGPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
