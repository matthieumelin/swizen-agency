import React from 'react'

import styled from 'styled-components'

export default function PriceCard({data}) {
  return (
    <StyledPriceCard>
        <PriceCardHeader>
            <PriceCardTitle>{data.title}</PriceCardTitle>
            <PriceCardDescription>{data.description}</PriceCardDescription>
        </PriceCardHeader>
        <PriceCardBody>
            
        </PriceCardBody>
    </StyledPriceCard>
  )
}
const StyledPriceCard = styled.article``;
