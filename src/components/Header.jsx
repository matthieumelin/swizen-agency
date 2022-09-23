import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoDark from "../assets/images/logo-dark.png";
import Office from "../assets/images/office.jpg";

import Colors from "../utils/Colors";

export default function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar>
        <NavbarWrapper>
          <NavbarLeft>
            <NavbarLogo src={LogoDark} alt="Swizen" />
          </NavbarLeft>
          <NavbarRight>
            <NavbarButton to="/">Demander un devis 📄</NavbarButton>
            <NavbarToggle
              navbarIsOpen={navbarIsOpen}
              onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            />
          </NavbarRight>
        </NavbarWrapper>
        <Menu navbarIsOpen={navbarIsOpen}>
          <MenuItem>
            <MenuLink to="/realisations">Réalisations</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/agence">L'agence</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/services">Services</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </Navbar>
      <Content>
        <Slogan>Votre agence web à Lens</Slogan>
        <Image src={Office} alt="Bureaux" />
      </Content>
    </StyledHeader>
  );
}

const StyledHeader = styled.header``;

const Navbar = styled.nav`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
  cursor: pointer;

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

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavbarLogo = styled.img`
  display: block;
  width: 100px;
`;
const NavbarLeft = styled.div``;
const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NavbarButton = styled(Link)`
  background-color: ${Colors.Blue};
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 40%);

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }
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

  @media screen and (min-width: 1024px) {
    max-height: 300px;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 60px;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Content = styled.div`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 20px 60px;
  }
`;

const Slogan = styled.h1`
  color: ${Colors.Blue};
  text-align: center;
  
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;
const Image = styled.img`
  display: none;
  width: 50%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
