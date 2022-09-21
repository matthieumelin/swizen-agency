import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoImage from "../assets/images/logo.png";

export default function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <Container>
      <Navbar>
        <NavbarWrapper>
          <NavbarLogo src={LogoImage} alt="Swizen" />
          <NavbarToggle navbarIsOpen={navbarIsOpen} onClick={() => setNavbarIsOpen(!navbarIsOpen)} />
        </NavbarWrapper>
        <Menu navbarIsOpen={navbarIsOpen}>
          <MenuItem>
            <MenuLink to="#prestations">Prestations</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#realisations">Réalisations</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#a-propos">À propos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </Navbar>
    </Container>
  );
}

const Container = styled.header``;

const Navbar = styled.nav`
  padding: 20px;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarToggle = styled.div`
  width: 20px;
  height: 2px;
  background-color: black;
  position: relative;

  &::before {
    position: absolute;
    top: -5px;
    background-color: black;
    width: 20px;
    height: 2px;
    content: "";
  }
  &::after {
    position: absolute;
    bottom: -5px;
    background-color: black;
    width: 20px;
    height: 2px;
    content: "";
  }
`;

const NavbarLogo = styled.img`
  display: block;
  width: 150px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  display: ${(props) => props.navbarIsOpen ? "block" : "none"};
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
text-decoration: none;
color: black;
`;
