import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useRef } from "react";

export default function ProjectsEnglish() {
  const [isPlayingToDo, setIsPlayingToDo] = useState(false);
  const [isPlayingChatty, setIsPlayingChatty] = useState(false);
  const [isPlayingWine, setIsPlayingWine] = useState(false);
  const videoRef = useRef(null);

  function togglePlay(selectedVideo, isPlaying) {
    const video = document.querySelector("." + selectedVideo);
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    if (selectedVideo === "ToDo") {
      setIsPlayingToDo(!isPlaying);
    } else if (selectedVideo === "Chatty") {
      setIsPlayingChatty(!isPlaying);
    } else if (selectedVideo === "Wine") {
      setIsPlayingWine(!isPlaying);
    }
  }

  function skipTime(seconds) {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  }

  function seekTo(event) {
    if (videoRef.current) {
      const seekTime = (event.target.value * videoRef.current.duration) / 100;
      videoRef.current.currentTime = seekTime;
    }
  }

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
            muted
            loop
            ref={videoRef}
            className="video projectVideo ToDo"
            alt="Video is loading"
          >
            <source src="ToDo.mp4" type="video/mp4" />
          </video>
          <button onClick={(event) => togglePlay("ToDo", isPlayingToDo)}>
            {isPlayingToDo ? "Pause" : "Play"}
          </button>
          <button onClick={() => skipTime(-10)}>-10s</button>
          <button onClick={() => skipTime(10)}>+10s</button>
          <input type="range" min="0" max="100" onChange={seekTo} />
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
            muted
            loop
            className="video projectVideo Chatty"
            alt="Video is loading"
          >
            <source src="Chatty1.mp4" type="video/mp4" />
          </video>
          <button onClick={(event) => togglePlay("Chatty", isPlayingChatty)}>
            {isPlayingChatty ? "Pause" : "Play"}
          </button>
        </Col>
      </Row>
      <Row>
        <h2>JavaScript</h2>
        <Col lg={6} xl={6}>
          <h3>Wine Online Shop</h3>
          <p>
            On this website you can buy wine. It is based on MERN-Stack. So it
            uses MongoDB as a database. The server runs on express.js and
            node.js. React is used for the frontend.
          </p>
          <p>
            Link to GitHub repository:{" "}
            <a href="https://github.com/JuliaPabst/Wine_Online_Shop">
              Wine Online Shop
            </a>
          </p>
          <video
            muted
            loop
            className="video projectVideo Wine"
            alt="Video is loading"
          >
            <source src="Wine.mp4" type="video/mp4" />
          </video>
          <button onClick={(event) => togglePlay("Wine", isPlayingWine)}>
            {isPlayingWine ? "Pause" : "Play"}
          </button>
        </Col>
      </Row>
    </Container>
  );
}
