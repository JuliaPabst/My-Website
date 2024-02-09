import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectsEnglish() {
  return (
    <Container>
      ProjectsEnglish
      <Row>
        <h2>Swift</h2>
        <Col lg={6} xl={6}>
          <h3>ToDo</h3>
          <p>
            With this app you can keep track of all your ToDos. The first
            version of this app used CoreData. The second version uses Realm.
          </p>
          <p>
            Link to GitHub repository:{" "}
            <a href="https://github.com/JuliaPabst/ToDo">ToDo</a>
          </p>
          <video
            autoPlay
            muted
            loop
            className="video projectVideo"
            alt="Video is loading"
          >
            <source src="ToDo.mp4" type="video/mp4" />
          </video>
        </Col>
        <Col lg={6} xl={6}>
          <h3>Chatty</h3>
          <p>
            With this app you can keep in touch with your friends. This app uses
            Firebase to authenticate its users and store their chats.
          </p>
          <p>
            Link to GitHub repository:{" "}
            <a href="https://github.com/JuliaPabst/Chatty">Chatty</a>
          </p>
          <video
            autoPlay
            muted
            loop
            className="video projectVideo"
            alt="Video is loading"
          >
            <source src="Chatty.mp4" type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Container>
  );
}
