import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import LogoWhite from "../assets/images/logo-white.png";
import { ReactComponent as MailIcon } from "../assets/icons/mail-icon.svg";
import { ReactComponent as MapPointerIcon } from "../assets/icons/map-pointer-icon.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-icon.svg";
import Colors from "../utils/Colors";

export default function Footer() {
  return (
    <StyledFooter>
      <Content>
        <Wrapper>
          <Link to="/">
            <Logo src={LogoWhite} alt="Swizen" />
          </Link>
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
        </Wrapper>
        <Sections>
          <Section>
            <SectionTitle>Suivez-nous</SectionTitle>
            <SectionMenu>
              <SectionMenuItem
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100086267746822",
                    "_blank"
                  )
                }
              >
                &#62; Facebook
              </SectionMenuItem>
              <SectionMenuItem
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/swizen.agency",
                    "_blank"
                  )
                }
              >
                &#62; Instagram
              </SectionMenuItem>
              <SectionMenuItem
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/swizen-agency",
                    "_blank"
                  )
                }
              >
                &#62; LinkedIn
              </SectionMenuItem>
            </SectionMenu>
          </Section>
        </Sections>
      </Content>
      <Copyright>
        <CopyrightText>
          Copyright © 2020 - 2022 Swizen Tous droits réservés -{" "}
          <CopyrightLink to="/legal">Mentions Légales</CopyrightLink>
        </CopyrightText>
      </Copyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${Colors.Gray};
`;

const Content = styled.div`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div``;

const Logo = styled.img`
  max-width: 150px;
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

const SectionTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

const SectionMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

const SectionMenuItem = styled.li`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const Copyright = styled.div`
  padding: 10px;
  background-color: ${Colors.DarkGray};
`;
const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin: 0;
`;
const CopyrightLink = styled(Link)`
  color: ${Colors.Blue};
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    color: ${Colors.LightBlue};
  }
`;
