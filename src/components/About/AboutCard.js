import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praveen kumar </span>
            from <span className="purple"> Vellore, India.</span>
            <br />Software Developer with around 5 years of experience in software
            development using UI Frameworks like Angular, React JS with working
            experience in Java, Spring Boot Technologies
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> FreeLancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "We dont need time to learn new things, Just curiosity is enough!"{" "}
          </p>
          <footer className="blockquote-footer">Praveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
