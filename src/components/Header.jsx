import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoWhite from "../assets/images/logo-white.png";
import Agency from "../assets/images/agency.png";
import Waves from "../assets/images/waves.svg";

import Colors from "../utils/Colors";

export default function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar>
        <NavbarWrapper>
          <NavbarLeft>
            <NavbarLogo src={LogoWhite} alt="Swizen" />
          </NavbarLeft>
          <NavbarRight>
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
        <About>
          <Title>
            <TitleSpan>Swizen,</TitleSpan>
            <Break /> Votre agence web à Lens
          </Title>
          <Description>
            Design, Développement web, E-commerce, Maintenance & SEO.
            <Break />
            Notre agence web est spécialisée dans la création de site internet
            sur-mesure.
          </Description>
        </About>
        <Image src={Agency} alt="Image by pch.vector on Freepik" />
      </Content>
      <WavesImage src={Waves} alt="Vagues" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: linear-gradient(
    180deg,
    rgba(7, 106, 255, 1) 0%,
    rgba(26, 117, 255, 1) 100%
  );
`;

const Navbar = styled.nav`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const NavbarToggle = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.navbarIsOpen ? Colors.WhiteOpaque : "#fff"};
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
    background-color: #fff;
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
    background-color: #fff;
    top: ${(props) => (props.navbarIsOpen ? "0px" : "5px")};
    transform: ${(props) => (props.navbarIsOpen ? "rotate(-405deg)" : null)};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavbarLogo = styled.img`
  display: block;
  max-width: 150px;
`;
const NavbarLeft = styled.div``;
const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
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
    max-height: initial;
    margin: 20px;
    display: flex;
    align-items: center;
    gap: 60px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: 0.2s;

  &:hover {
    margin: 0 0 5px 0;
    transition: 0.2s;
  }
`;

const Content = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 100px 50px 0 50px;
  }
`;
const WavesImage = styled.img`
  display: block;
`;
const About = styled.div`
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;
const Title = styled.h1`
  color: #fff;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Break = styled.br``;
const TitleSpan = styled.span`
  color: ${Colors.DarkGray};
`;
const Description = styled.p`
  color: #fff;
`;
const Image = styled.img`
  display: none;
  width: 50%;
  margin: 0 auto;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  @media screen and (min-width: 1024px) {
    display: block;
    border-radius: 100px 20px 100px 20px;
    height: 250px;
    object-fit: cover;
    box-shadow: 0 0 30px rgb(0 0 0 / 7%);
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
