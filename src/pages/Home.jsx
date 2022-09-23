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
      <ContactSection>
        <ContactForm onSubmit={onSubmit}>
          <ContactFormContainer>
            <ContactFormTitle>Un projet ? Contactez nous 🚀</ContactFormTitle>
            <ContactFormWrapper>
              <ContactFormGroup>
                <ContactFormLabel>Nom</ContactFormLabel>
                <ContactFormInput type="text" id="lastName" placeholder="Doe" />
              </ContactFormGroup>
              <ContactFormGroup>
                <ContactFormLabel>Prénom</ContactFormLabel>
                <ContactFormInput
                  type="text"
                  id="firstName"
                  placeholder="John"
                />
              </ContactFormGroup>
            </ContactFormWrapper>
            <ContactFormWrapper>
              <ContactFormGroup>
                <ContactFormLabel>E-mail</ContactFormLabel>
                <ContactFormInput
                  type="email"
                  id="email"
                  placeholder="mon@email.fr"
                />
              </ContactFormGroup>
              <ContactFormGroup>
                <ContactFormLabel>Téléphone</ContactFormLabel>
                <ContactFormInput
                  type="tel"
                  id="phone"
                  placeholder="0600000000"
                />
              </ContactFormGroup>
            </ContactFormWrapper>
            <ContactFormGroup>
              <ContactFormLabel htmlFor="contactObject">Objet</ContactFormLabel>
              <ContactFormSubject id="contactObject">
                <ContactFormSubjectOption value="recruitement">Recrutement</ContactFormSubjectOption>
              </ContactFormSubject>
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactFormLabel>Message</ContactFormLabel>
              <ContactFormTextArea rows={3} id="message" placeholder="dd" />
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactFormButton type="submit">Soumettre</ContactFormButton>
            </ContactFormGroup>
          </ContactFormContainer>
        </ContactForm>
      </ContactSection>
      <CalendarButton />
      <Footer />
    </StyledHome>
  );
}

const StyledHome = styled.div``;

const ContactSection = styled.section`
  margin: 30px 0;
`;
const ContactForm = styled.form`
  background-image: url(${Splash});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
`;
const ContactFormContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 15%);
  padding: 20px 20px 10px 20px;
  transform: translateX(-600px);
  animation-name: slide;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes slide {
    0% {
      transform: translateX(-600px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
const ContactFormTitle = styled.h2`
  margin: 0 0 10px 0;
  text-align: center;
  font-weight: 300;
`;
const ContactFormWrapper = styled.div``;
const ContactFormSubject = styled.select`
`;
const ContactFormSubjectOption = styled.option`
`;
const ContactFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const ContactFormLabel = styled.label`
  margin: 0 0 5px 0;
`;
const ContactFormInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 5px 10px;
  font-family: inherit;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-bottom: 1px solid ${Colors.Blue};
    transition: 0.2s;
  }
`;
const ContactFormTextArea = styled.textarea`
  resize: vertical;
  min-height: 100px;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  font-family: inherit;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-bottom: 1px solid ${Colors.Blue};
    transition: 0.2s;
  }
`;
const ContactFormButton = styled.button`
  background-color: ${Colors.Blue};
  border: none;
  color: white;
  font-family: inherit;
  padding: 10px 0;
  margin: 10px 0 0 0;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }
`;
