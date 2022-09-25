import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styled from "styled-components";

import Splash from "../assets/images/splash.svg";
import Colors from "../utils/Colors";
import CalendarButton from "../components/CalendarButton";

export default function Home({ currentLocation, setCurrentLocation }) {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StyledHome>
      <Header
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <CalendarButton />
      <Footer />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
