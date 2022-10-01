import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarButton from "../components/CalendarButton";

import styled from "styled-components";

import Splash from "../assets/images/splash.svg";
import AgencyBg from "../assets/images/agency2.png";

import Colors from "../utils/Colors";
import ServiceCard from "../components/ServiceCard";
import ToolCard from "../components/ToolCard";

export default function Home({
  currentLocation,
  services,
  tools,
  setCurrentLocation,
}) {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StyledHome>
      <Header
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Main>
        <Agency>
          <Title align="center">
            L'agence <TitleSpan>Swizen</TitleSpan>
          </Title>
          <AgencyImage
            src="https://img.freepik.com/premium-photo/modern-office-with-office-supplies-table-with-office-environment-background_67155-5307.jpg?w=2000"
            alt="L'agence"
          />
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            quaerat reprehenderit quasi molestias minus ipsa, excepturi
            aspernatur veniam atque officia eveniet omnis ea harum cumque quos
            alias corrupti beatae aliquid.
          </Description>
        </Agency>
        <Services>
          <Title align="center">
            Nos services d'<TitleSpan>agence web</TitleSpan>
          </Title>
          <Description>
            Pour répondre à tous vos besoins, Swizen propose une gamme de
            services complète. En tant qu'agence digitale, nous tâchons de vous
            accompagner dans votre projet du début à la fin.
          </Description>
          <ServicesContent>
            {services.map((service, key) => {
              return <ServiceCard key={key} data={service} />;
            })}
          </ServicesContent>
        </Services>
        <Tools>
          <Title align="center">
            Découvrez nos
            <TitleSpan> expertises</TitleSpan>
          </Title>
          <Description>
            Afin de vous délivrer le meilleur des services, nous travaillons
            avec des CMS et Framework existants. Nous voulons vous proposer la
            solution la plus adaptée à votre projet.
          </Description>
          <ToolsContent>
            {tools.map((tool, key) => {
              return <ToolCard key={key} data={tool} />;
            })}
          </ToolsContent>
        </Tools>
        <CalendarButton />
      </Main>
      <Footer />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
const Main = styled.main``;
const Description = styled.p`
  text-align: center;
  font-weight: 500;
  margin: 20px 0 0 0;
  color: ${Colors.DarkGray};
`;
const Title = styled.h2`
  text-align: ${(props) => props.align};
  color: ${Colors.DarkGray};
  margin: 0 0 20px 0;

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
const TitleSpan = styled.span`
  color: ${Colors.Blue};
`;
const Agency = styled.section`
  padding: 20px;

  @media screen and (min-width: 1024px) {
    padding: 60px 100px;
  }
`;
const AgencyImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: 350px;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 2px;
`;
const Services = styled.section`
  background-color: #f5f5f5;
  padding: 20px;

  @media screen and (min-width: 1024px) {
    padding: 60px 100px;
  }
`;
const ServicesContent = styled.div`
  display: grid;
  gap: 20px;
  margin: 30px 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Tools = styled.section`
padding: 20px;

@media screen and (min-width: 1024px) {
  padding: 60px 0;
}
`;
const ToolsContent = styled.div`
margin: 30px 0 0 0;

@media screen and (min-width: 1024px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
`;
