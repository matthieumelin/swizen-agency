import React from "react";
import { Helmet } from "react-helmet-async";

import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CalendarButton from "../components/CalendarButton";
import ServiceCard from "../components/ServiceCard";
import ToolCard from "../components/ToolCard";

import Colors from "../utils/Colors";

import Office from "../assets/images/office.jpg";

export default function Home({
  currentLocation,
  services,
  tools,
  setCurrentLocation,
}) {
  return (
    <StyledHome>
      <Helmet>
        <title>Agence web à Lens - Création de site internet | SWIZEN</title>
      </Helmet>
      <Header
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Main>
        <Agency id="agency">
          <Title align="center">
            L'agence <TitleSpan>Swizen</TitleSpan>
          </Title>
          <AgencyImage
            src={Office}
            alt="L'agence"
          />
          <Description style={{maxWidth: 1024, margin: "20px auto 0 auto"}}>
            Swizen est une toute nouvelle agence web situé à Lens. Nous mettons
            le relationnel au coeur de notre démarche, car chaque client est
            différent et se doit d'être écouté et accompagné tout au long de son
            projet.
          </Description>
        </Agency>
        <Services id="services">
          <Title align="center">
            Nos services d'<TitleSpan>agence web</TitleSpan>
          </Title>
          <Description style={{maxWidth: 1024, margin: "20px auto 0 auto"}}>
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
          <Description style={{maxWidth: 1024, margin: "20px auto 0 auto"}}>
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

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
const TitleSpan = styled.span`
  color: ${Colors.Blue};
`;
const Agency = styled.section`
  padding: 20px;

  ${Title} {
    margin-top: 0;
  }

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
  padding: 20px 20px 0 20px;

  @media screen and (min-width: 1024px) {
    padding: 60px 100px;

    ${Title} {
      margin: 0;
    }
  }
`;
const ToolsContent = styled.div`
  margin: 30px 0 0 0;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
