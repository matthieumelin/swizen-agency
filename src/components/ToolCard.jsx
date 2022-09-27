import React from "react";

import styled from "styled-components";
import Colors from "../utils/Colors";

export default function ToolCard({ data }) {
  return (
    <StyledToolCard>
      <ToolCardLogo src={data.logo} alt={data.name} />
      <ToolCardDescription>{data.description}</ToolCardDescription>
    </StyledToolCard>
  );
}

const StyledToolCard = styled.article`
  background-color: white;
  padding: 30px;

  @media screen and (min-width: 1024px) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-right: none;
    }
  }
`;
const ToolCardLogo = styled.img`
  display: block;
  height: 60px;
  object-fit: cover;
  margin: 0 auto;
  pointer-events: none
`;
const ToolCardDescription = styled.p`
  text-align: center;
`;
