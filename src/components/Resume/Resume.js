import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumeRight from "./ResumeRight";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeRight />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href="https://drive.google.com/file/d/1Yw5QJh8QzQzQzQzQzQzQzQzQzQzQzQzQz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="download-resume-btn"
          >
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume; 