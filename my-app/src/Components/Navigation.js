import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation({ selectLanguage, language, selectMode }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <button onClick={(event) => selectMode("me")}>Julia Pabst</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
              {language === "German" ? (
                <button onClick={(event) => selectMode("me")}>Über mich</button>
              ) : (
                <button onClick={(event) => selectMode("me")}>About me</button>
              )}
            </Navbar.Text>
            <Navbar.Text>
              {language === "German" ? (
                <button onClick={(event) => selectMode("projects")}>
                  Projekte
                </button>
              ) : (
                <button onClick={(event) => selectMode("projects")}>
                  Projects
                </button>
              )}
            </Navbar.Text>
            <Navbar.Text>
              {language === "German" ? (
                <button onClick={selectLanguage}>🇬🇧 Englisch</button>
              ) : (
                <button onClick={selectLanguage}>🇩🇪 German</button>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
