import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import boeing from "../../Assets/Projects/boeing.jpg";
import nissan from "../../Assets/Projects/nissan.jpg";
import beacon from "../../Assets/Projects/beacon.jpg";
import bofa from "../../Assets/Projects/bofa.png";
import servicenow from "../../Assets/Projects/servicenow.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bofa}
              isBlog={false}
              title="E-Portal"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nissan}
              isBlog={false}
              title="TOFFEE"
              description="ApplicaTion RepOsitory For PortFolio ManagEmEnt is to manage
              and visualize information and status of global applications. To reduce the number of applications by eliminating duplication of application between regions. Thus reducing the cost to the
              company"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={servicenow}
              isBlog={false}
              title="TOFFEE 2.0"
              description="Service Now Tool based development activity to expand
              Application Repository data coverage which increase transparency
              between applications and their business relevancy for business
              support. Single Source Truth for all APM Applications."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boeing}
              isBlog={false}
              title="Boeing"
              description="The world largest aerospace company and
              leading manufacturer of commercial jetliners, defense, space and security system. Developed portal named
              Analytics suite for displaying fleet health to the end
              users."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beacon}
              isBlog={false}
              title="Beacon Health Options"
              description="DBHDD Portal - The Georgia Department of
              Behavioral Health and Developmental Disabilities
              provides treatment and support services to people with
              mental health challenges and substance use disorders, and assists individuals who live with intellectual and
              development disorders."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
