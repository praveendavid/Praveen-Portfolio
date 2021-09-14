import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/praveen-kumar-david.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack Developer"
              date="Sep-2016 - Present"
              content={[
                "Experience in all the phases of software Development involving Requirement Analysis, Design, Coding and Implementation.",
                "Optimizing the application for maximum performance and scalability.",
                "Translation of the UI/UX design wireframes to actual code that will produce visual elements.",
                "Proficiently understanding cross-browser compatibility issues and to work around them. ",
                "Expertise in Core Java with strong understanding of Object-Oriented Concepts.",
                "Experience working with Agile SCRUM methodology.",
                "Extensive adaptability with complex and rapid changing business demands and requirements.",
                "Strong critical thinking and planning skills, with capacity to work in team environment.",
                "Can able to work as a full stack developer using Spring Boot as a Backend"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Vellore Institute of Technology"
              date="2011 - 2016"
              content={[`CGPA: 7.42`]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer- Freelancing (CRM)"
              content={[
                "Working on building front-end UI design using React JS and building API routes using Node and express.js.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
