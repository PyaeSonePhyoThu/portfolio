import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #161b22;
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #c9d1d9;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #58a6ff;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};
