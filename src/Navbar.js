// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Louvre</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/a">Explore</Nav.Link>
            <Nav.Link href="/aa">contact</Nav.Link>
            <Nav.Link href="/aaa">booking</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-light">Online Boutique</Button>
            <Button variant="success">🎟️ Tickets</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;



