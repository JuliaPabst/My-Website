import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoPlayer from "./VideoPlayer";

export default function ProjectsEnglish() {
  return (
    <Container>
      <Row>
        <h2>Swift</h2>
        <Col lg={6} xl={6}>
          <h3>ToDo</h3>
          <p>With this app you can keep track of all your ToDos.</p>
          <p>
            Technology used: Realm (final version), CoreData (first version)
          </p>
          <p>
            Link to GitHub repository:
            <a href="https://github.com/JuliaPabst/ToDo">ToDo</a>
          </p>
          <VideoPlayer videoName="ToDo" />
        </Col>
        <Col lg={6} xl={6}>
          <h3>Chatty</h3>
          <p>With this app you can keep in touch with your friends.</p>
          <p>
            Technology used: Networking, Firebase: Authentication and FireStore
          </p>
          <p>
            Link to GitHub repository:
            <a href="https://github.com/JuliaPabst/Chatty">Chatty</a>
          </p>
          <VideoPlayer videoName="Chatty1" />
        </Col>
      </Row>
      <Row>
        <h2>JavaScript</h2>
        <div>
          <h3>Wine Online Shop</h3>
          <p>On this website you can buy wine.</p>
          <p>
            Technology used: MERN-Stack (MongoDB, express.js, React, node.js)
          </p>
          <p>
            Link to GitHub repository:
            <a href="https://github.com/JuliaPabst/Wine_Online_Shop">
              Wine Online Shop
            </a>
          </p>
          <VideoPlayer videoName="Wine02" />
        </div>
        <div>
          <h3>Online Weather App</h3>
          <p>
            On this website you can search for the weather forecast for a cities
            all across the world. It is based on the API of OpenWeather.
          </p>
          <p>Technology used: React, Networking</p>
          <p>
            Link to GitHub repository:
            <a href="https://github.com/JuliaPabst/weather-app-react">
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
