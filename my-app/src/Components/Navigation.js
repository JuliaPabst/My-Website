import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation({ selectLanguage, language, selectMode }) {
  return (
    <Navbar expand="lg" className="navbar-design">
      <Container fluid>
        <Navbar.Brand href="#home">
          <button
            onClick={(event) => selectMode("me")}
            className="navbar-button home-button"
          >
            Julia Pabst
          </button>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="white-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
              {language === "German" ? (
                <button
                  onClick={(event) => selectMode("me")}
                  className="navbar-button"
                >
                  Über mich
                </button>
              ) : (
                <button onClick={(event) => selectMode("me")}>About me</button>
              )}
            </Navbar.Text>
            <hr></hr>
            <Navbar.Text>
              {language === "German" ? (
                <button
                  onClick={(event) => selectMode("projects")}
                  className="navbar-button"
                >
                  Projekte
                </button>
              ) : (
                <button
                  onClick={(event) => selectMode("projects")}
                  className="navbar-button"
                >
                  Projects
                </button>
              )}
            </Navbar.Text>
            <hr></hr>
            <Navbar.Text>
              {language === "German" ? (
                <button onClick={selectLanguage} className="navbar-button">
                  🇬🇧 English
                </button>
              ) : (
                <button onClick={selectLanguage} className="navbar-button">
                  🇩🇪 Deutsch
                </button>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
