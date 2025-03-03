// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.li`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #f39c12;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 30px;
  height: 25px;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;

  div {
    width: 30px;
    height: 4px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuMobile = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuMobileOpen = styled.div`
  display: none;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 60px;
  right: 30px;
  background-color: #333;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f39c12;
    }
  }
`;

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>MyLogo</Logo>
      <MenuMobile>
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem>About</MenuItem>
        </Link>
        <Link to="/services">
          <MenuItem>Services</MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuMobile>
      <BurgerIcon onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
      {menuOpen && (
        <MenuMobileOpen>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </MenuMobileOpen>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
