import React from "react";
import { Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <div className="louvre-navbar">
      <Container className="louvre-navbar-row">
        {/* Left: Logo + Brand */}
        <div className="louvre-brand">
          <img src="/images.png" alt="Louvre Logo" className="louvre-logo" />
          <span className="louvre-text"><Nav.Link as={NavLink} to="/">Louvre</Nav.Link></span>
        </div>

        {/* Center: Nav Links only */}
        <Nav className="louvre-center-nav">
          <Nav.Link as={NavLink} to="/a">Explore</Nav.Link>
          <Nav.Link as={NavLink} to="/aaa">Booking</Nav.Link>
          <Nav.Link as={NavLink} to="/aaaa">Login</Nav.Link>
          <Nav.Link as={NavLink} to="/aa">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/aaaaa">Membership</Nav.Link>
        </Nav>

        {/* Right: Buttons */}
        <div className="louvre-buttons">
          <Button className="btn-louvre-outline" href="/">🛍 Boutique</Button>
          <Button className="btn-louvre-ticket" href="/aaa">🎟 Tickets</Button>
        </div>
      </Container>
    </div>
  );
}

export default CustomNavbar;
