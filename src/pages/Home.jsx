import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styled from "styled-components";

export default function Home({ currentLocation, setCurrentLocation }) {
  return (
    <Container>
      <Header
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
