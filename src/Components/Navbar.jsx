import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Portfolio - SUBHAJIT</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setMenuOpen(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setMenuOpen(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setMenuOpen(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/services" onClick={() => setMenuOpen(false)}>Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/support" onClick={() => setMenuOpen(false)}>Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
