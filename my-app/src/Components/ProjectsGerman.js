import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoPlayer from "./VideoPlayer";

export default function ProjectsGerman() {
  return (
    <Container className="padding-left-right">
      <Row>
        <h2 className="language-projects">Swift</h2>
        <Col lg={6} xl={6} className="padding-top">
          <h3 className="project-name">ToDo</h3>
          <p className="project-description">
            With this app you can keep track of all your ToDos.
          </p>
          <p>
            <span className="project-description-definition">
              Technology used:
            </span>{" "}
            Realm (final version), CoreData (first version)
          </p>
          <p className="project-description-definition margin-bottom-section">
            Link to GitHub repository:
            <a
              className="link-projects margin-bottom-section"
              href="https://github.com/JuliaPabst/ToDo"
            >
              ToDo
            </a>
          </p>
          <VideoPlayer videoName="ToDo" />
        </Col>
        <Col lg={6} xl={6} className="padding-top">
          <h3 className="project-name chatty-name">Chatty</h3>
          <p className="project-description">
            With this app you can keep in touch with your friends.
          </p>
          <p>
            <span className="project-description-definition">
              Technology used:
            </span>{" "}
            Networking, Firebase: Authentication and FireStore
          </p>
          <p className="project-description-definition margin-bottom-section">
            Link to GitHub repository:
            <a
              className="link-projects margin-bottom-section"
              href="https://github.com/JuliaPabst/Chatty"
            >
              Chatty
            </a>
          </p>
          <VideoPlayer videoName="Chatty1" />
        </Col>
      </Row>
      <Row className="padding-top-section">
        <h2 className="language-projects">JavaScript</h2>
        <div>
          <h3 className="project-name">Wine Online Shop</h3>
          <p className="project-description">
            On this website you can buy wine.
          </p>
          <p>
            <span className="project-description-definition">
              Technology used:
            </span>{" "}
            MERN-Stack (MongoDB, express.js, React, node.js)
          </p>
          <p className="project-description-definition margin-bottom-section">
            Link to GitHub repository:
            <a
              className="link-projects margin-bottom-section"
              href="https://github.com/JuliaPabst/Wine_Online_Shop"
            >
              Wine Online Shop
            </a>
          </p>
          <VideoPlayer videoName="Wine02" />
        </div>
        <div className="margin-top-section">
          <h3 className="project-name margin-top-section">
            Online Weather App
          </h3>
          <p className="project-description">
            On this website you can search for the weather forecast for a cities
            all across the world. It is based on the API of OpenWeather.
          </p>
          <p>
            <span className="project-description-definition">
              Technology used:
            </span>{" "}
            React, Networking
          </p>
          <p className="project-description-definition margin-bottom-section">
            Link to GitHub repository:
            <a
              className="link-projects margin-bottom-section"
              href="https://github.com/JuliaPabst/weather-app-react"
            >
              Online Weather App
            </a>
          </p>
          <iframe
            src="https://jade-blancmange-f3463d.netlify.app/"
            title="weather-app"
          ></iframe>
        </div>
      </Row>
    </Container>
  );
}
