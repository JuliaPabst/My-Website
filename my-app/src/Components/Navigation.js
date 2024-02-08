import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation({ selectLanguage, language }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Julia Pabst</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Über mich</Nav.Link>
            <Nav.Link href="#link">Projekte</Nav.Link>
            <Navbar.Text>
              {language == "German" ? (
                <button onClick={selectLanguage}>English</button>
              ) : (
                <button onClick={selectLanguage}>Deutsch</button>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
