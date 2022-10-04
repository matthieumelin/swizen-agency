import React from "react";

import styled from "styled-components";
import Colors from "../utils/Colors";

import CheckSvg from "../assets/icons/check-icon.svg";
import { Link } from "react-router-dom";

export default function PriceCard({ data }) {
  return (
    <StyledPriceCard>
      <PriceCardHeader>
        <PriceCardName>{data.name}</PriceCardName>
        <PriceCardDescription>{data.description}</PriceCardDescription>
      </PriceCardHeader>
      <PriceCardBody>
        <PriceCardAmount><PriceCardAmountSpan>A partir de </PriceCardAmountSpan>{data.startPrice}</PriceCardAmount>
        <PriceCardFeatures>
          {data.features &&
            data.features.map((feature, index) => {
              return (
                <PriceCardFeature key={`feature_${index}`}>
                  <CheckIcon src={CheckSvg} alt="Valable" /> {feature}
                </PriceCardFeature>
              );
            })}
        </PriceCardFeatures>
        <PriceCardLink to="/contact">Demander un devis</PriceCardLink>
      </PriceCardBody>
    </StyledPriceCard>
  );
}
const StyledPriceCard = styled.article`
  box-shadow: 0px 0px 30px rgba(0 0 0 / 7%);
  height: 100%;
  position: relative;
`;
const PriceCardHeader = styled.div`
  background-color: ${Colors.Blue};
  padding: 20px;
`;
const PriceCardName = styled.h3`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;
const PriceCardDescription = styled.p`
  margin: 0;
  text-align: center;
  color: white;
`;
const PriceCardBody = styled.div`
  background-color: white;
  border: 1px solid lightgray;
`;
const PriceCardAmount = styled.p`
text-align: center;
font-weight: 600;
font-size: 2rem;
margin: 20px 0 0 0;
`;
const PriceCardAmountSpan = styled.span`
font-size: 0.8rem;
text-transform: uppercase;
margin-right: 5px;
`;
const PriceCardFeatures = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin: 20px 0 70px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PriceCardFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  position: relative;
  &:last-child {
    &::after {
      background-color: transparent;
    }
  }
  &::after {
    content: "";
    background-color: lightgray;
    height: 1px;
    border-radius: 2px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
const PriceCardLink = styled(Link)`
  color: ${Colors.Blue};
  font-family: inherit;
  background-color: transparent;
  border: 1px solid ${Colors.Blue};
  padding: 10px;
  transition: 0.2s;
  text-decoration: none;
  display: block;
  width: max-content;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.Blue};
    color: white;
  }
`;
const CheckIcon = styled.img`
  display: block;
  width: 18px;
`;
