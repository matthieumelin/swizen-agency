import React from 'react'

import styled from 'styled-components'

export default function ServiceCard({data}) {
  return (
    <StyledServiceCard>
      <ServiceCardIcon src={`${process.env.PUBLIC_URL}/assets/icons/${data.icon}.svg`} />
        <ServiceCardTitle>{data.name}</ServiceCardTitle>
        <ServiceCardDescription>{data.description}</ServiceCardDescription>
    </StyledServiceCard>
  )
}

const StyledServiceCard = styled.article`
background-color: white;
padding: 20px;
transition: 0.2s;
border-radius: 2px;
border: 1px solid rgba(0, 0, 0, 0.1);

&:hover {
    transition: 0.2s;
    box-shadow: 0px 0px 30px rgb(0 0 0 / 7%);
}
`;
const ServiceCardIcon = styled.img`
display: block;
width: 42px;
margin: 0 auto;
`;
const ServiceCardTitle = styled.h3`
text-align: center;
font-weight: 600;
`;
const ServiceCardDescription = styled.p`
text-align: center;
`;