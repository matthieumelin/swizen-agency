import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import LogoWhite from "../assets/images/logo-white.png";
import { ReactComponent as MailIcon } from "../assets/icons/mail-icon.svg";
import { ReactComponent as MapPointerIcon } from "../assets/icons/map-pointer-icon.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-icon.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <Content>
        <Logo src={LogoWhite} alt="Swizen" />
        <Description>
          Votre agence web à Lens spécialisée dans la création de internet.
        </Description>
        <Infos>
          <InfoItem>
            <InfoIcon>
              <MapPointerIcon
                fill="white"
                style={{ width: 18, margin: "0 10px 0 0" }}
              />
            </InfoIcon>
            128 Av. Alfred Maes, 62300 Lens
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <MailIcon
                fill="white"
                style={{ width: 18, margin: "0 10px 0 0" }}
              />
            </InfoIcon>
            agence@swizen.fr
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <PhoneIcon
                fill="white"
                style={{ width: 18, margin: "0 10px 0 0" }}
              />
            </InfoIcon>
            06.83.40.61.65
          </InfoItem>
        </Infos>
        <Sections>
          <Section>
            <SectionTitle>Nos services</SectionTitle>
            <SectionMenu>
              <SectionMenuItem>
                <SectionMenuLink to="/">Lorem ipsum</SectionMenuLink>
              </SectionMenuItem>
            </SectionMenu>
          </Section>
          <Section>
            <SectionTitle>L'agence</SectionTitle>
            <SectionMenu>
              <SectionMenuItem>
                <SectionMenuLink to="/">Lorem ipsum</SectionMenuLink>
              </SectionMenuItem>
            </SectionMenu>
          </Section>
          <Section>
            <SectionTitle>Nos réseaux</SectionTitle>
            <SectionMenu>
              <SectionMenuItem>
                <SectionMenuLink to="/">&#62; Instagram</SectionMenuLink>
              </SectionMenuItem>
              <SectionMenuItem>
                <SectionMenuLink to="/">&#62; Facebook</SectionMenuLink>
              </SectionMenuItem>
            </SectionMenu>
          </Section>
        </Sections>
      </Content>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #353535;
`;

const Content = styled.div`
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
  display: block;
`;

const Description = styled.p`
  color: #fff;
`;

const Infos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 300;
`;

const InfoIcon = styled.div`
  width: 30px;
`;

const Sections = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Section = styled.section``;

const SectionTitle = styled.h4`
  color: white;
  font-weight: 500;
  margin: 0 0 10px 0;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: 30px;
    background-color: white;
    height: 1px;
    width: 30px;
    content: "";
  }
`;

const SectionMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SectionMenuItem = styled.li`
display: flex;
align-items: center;
`;

const SectionMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 300;
`;
