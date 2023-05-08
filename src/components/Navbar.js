import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar() {
  return (
      <Navbar variant="light" className="Navbar font-AgencyFB" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <span>&lt;/&gt; CodevSpace</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto Navbar-links" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about_us">About Us</Nav.Link>
            <Nav.Link href="#contact_us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
