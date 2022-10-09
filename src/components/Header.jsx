import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoWhite from "../assets/images/logo-white.png";
import Waves from "../assets/images/waves.svg";

import Colors from "../utils/Colors";

export default function Header() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar>
        <NavbarWrapper>
          <NavbarLeft to="/">
            <NavbarLogo src={LogoWhite} alt="Swizen" />
          </NavbarLeft>
          <NavbarRight>
            <NavbarButton to="/contact">Demander un devis</NavbarButton>
            <NavbarToggle
              navbarIsOpen={navbarIsOpen}
              onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            />
          </NavbarRight>
        </NavbarWrapper>
        <Menu navbarIsOpen={navbarIsOpen}>
          <MenuItem>
            <MenuLegacyLink href="/#projects">Réalisations</MenuLegacyLink>
          </MenuItem>
          <MenuItem>
            <MenuLegacyLink href="/#agency">L'agence</MenuLegacyLink>
          </MenuItem>
          <MenuItem>
            <MenuLegacyLink href="/#services">Services</MenuLegacyLink>
          </MenuItem>
          <MenuItem>
            <MenuLegacyLink href="/tarifs">Tarifs</MenuLegacyLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuItem>
        </Menu>
      </Navbar>
      <Content>
        <Wrapper>
          <About>
            <Title>
              Votre agence web à Lens
            </Title>
            <Description>
              Design, Développement web, E-commerce, Maintenance & SEO.
              <Break />
              Notre agence web est spécialisée dans la création de site internet
              sur-mesure.
            </Description>
          </About>
        </Wrapper>
        <WavesImage src={Waves} alt="Vagues" />
      </Content>
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
  padding: 20px 20px 0 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${Colors.LightBlue};
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
const NavbarLeft = styled(NavLink)`

`;
const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const NavbarButton = styled(Link)`
  display: none;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    position: absolute;
    right: 20px;
    display: block;
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
const MenuLegacyLink = styled.a`
  text-decoration: none;
  color: white;
  transition: 0.2s;

  &:hover {
    margin: 0 0 5px 0;
    transition: 0.2s;
  }
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.2s;

  &:hover {
    margin: 0 0 5px 0;
    transition: 0.2s;
  }
`;
const Wrapper = styled.div`
  padding: 30px 20px 0 20px;
  @media screen and (min-width: 1024px) {
    padding: 80px 50px 0 50px;
  }
`;
const Content = styled.div`
  @media screen and (min-width: 1024px) {
    gap: 20px;
  }
`;
const WavesImage = styled.img`
  display: block;
  pointer-events: none
`;
const About = styled.div`
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;
const Title = styled.h1`
  color: #fff;
  margin: 0;

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;
const Break = styled.br``;
const Description = styled.p`
  color: #fff;
  margin: 10px 0 0 0;
`;
