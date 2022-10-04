import React from "react";

import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PriceCard from "../components/PriceCard";
import Colors from "../utils/Colors";

export default function Price({ prices }) {
  return (
    <StyledPrice>
      <Header />
      <Main>
        <Title>Tarifs</Title>
        <Prices>
          {prices && prices.map((price, index) => {
            return <PriceCard key={`price_${index}`} data={price} />;
          })}
        </Prices>
      </Main>
      <Footer />
    </StyledPrice>
  );
}

const StyledPrice = styled.div``;
const Main = styled.main`
padding: 20px;
`;
const Title = styled.h2`
color: ${Colors.DarkBlue};
text-align: center;
margin: 0 0 20px 0;

@media screen and (min-width: 1024px) {
  font-size: 2rem;
}
`;
const Prices = styled.section`
margin: 20px;
display: grid;
gap: 20px;

@media screen and (min-width: 768px){
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (min-width: 1024px){
  grid-template-columns: repeat(4, 1fr);
}
`;