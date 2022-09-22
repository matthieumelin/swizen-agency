import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoDark from "../assets/images/logo-dark.png";
import LogoWhite from "../assets/images/logo-white.png";
import HeaderBackground from "../assets/images/header.jpg";

import Colors from "../utils/Colors";

export default function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar>
        <NavbarWrapper>
          <NavbarLogo src={LogoDark} alt="Swizen" />
          <NavbarToggle
            navbarIsOpen={navbarIsOpen}
            onClick={() => setNavbarIsOpen(!navbarIsOpen)}
          />
        </NavbarWrapper>
        <Menu navbarIsOpen={navbarIsOpen}>
          <MenuItem>
            <MenuLink to="#prestations">Prestations</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#realisations">Réalisations</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#agence">L'agence</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="#contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </Navbar>
      <Content>
        <Slogan>Votre agence web à Lens</Slogan>
      </Content>
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;

const Navbar = styled.nav`
  padding: 20px;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarToggle = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.navbarIsOpen ? Colors.DarkBlueOpaque : Colors.DarkBlue};
  height: 1px;
  width: 20px;
  -webkit-transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;

  &::before {
    -webkit-transition: inherit;
    -moz-transition: inherit;
    -ms-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
    border-radius: inherit;
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${Colors.DarkBlue};
    top: ${(props) => (props.navbarIsOpen ? "0px" : "-5px")};
    transform: ${(props) => (props.navbarIsOpen ? "rotate(405deg)" : null)};
  }

  &::after {
    content: "";
    position: absolute;
    -webkit-transition: inherit;
    -moz-transition: inherit;
    -ms-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
    border-radius: inherit;
    content: "";
    width: inherit;
    height: inherit;
    background-color: ${Colors.DarkBlue};
    top: ${(props) => (props.navbarIsOpen ? "0px" : "5px")};
    transform: ${(props) => (props.navbarIsOpen ? "rotate(-405deg)" : null)};
  }
`;

const NavbarLogo = styled.img`
  display: block;
  width: 100px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${(props) => (props.navbarIsOpen ? "20px 0 0 0" : "0px")};
  max-height: ${(props) => (props.navbarIsOpen ? "300px" : "0px")};
  -webkit-transition: margin 0.5s, max-height 0.5s;
  -moz-transition: margin 0.5s, max-height 0.5s;
  -ms-transition: margin 0.5s, max-height 0.5s;
  -o-transition: margin 0.5s, max-height 0.5s;
  transition: margin 0.5s, max-height 0.5s;
  overflow: hidden;
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Content = styled.div`
  background-image: url(${HeaderBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
`;

const Slogan = styled.h1`
  color: white;
  text-align: center;
  font-weight: 200;
`;
