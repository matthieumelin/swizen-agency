import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styled from 'styled-components'

export default function NotFound() {
    return (
        <StyledNotFound>
            <Header />
            <Footer />
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div``;
