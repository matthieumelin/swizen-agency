import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Colors from "../utils/Colors";

import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <StyledNotFound>
            <Header />
            <Main>
                <Title>Oups !</Title>
                <Description>La page que vous recherchez semble introuvable.</Description>
                <CustomLink to="/">Retour à la page d'accueil</CustomLink>
            </Main>
            <Footer />
        </StyledNotFound>
    )
}

const StyledNotFound = styled.div``;
const Main = styled.main`
padding: 60px 20px;
max-width: 1024px;
margin: 0 auto;
`;
const Title = styled.h1`
color: ${Colors.DarkBlue};
margin: 0 0 0 0;
`;
const Description = styled.p`
color: ${Colors.DarkBlue};
`;
const CustomLink = styled(Link)`
text-decoration: none;
color: white;
background-color: ${Colors.Blue};
padding: 10px;
display: block;
width: max-content;
transition: 0.2s;
&:hover {
    background-color: ${Colors.LightBlue};
    transition: 0.2s;
}
`;