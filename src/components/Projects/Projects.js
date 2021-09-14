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
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={servicenow}
              isBlog={false}
              title="TOFFEE 2.0"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boeing}
              isBlog={false}
              title="Boeing"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beacon}
              isBlog={false}
              title="Beacon Health Options"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
