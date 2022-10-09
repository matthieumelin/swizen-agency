import React, { useState } from "react";

import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { isValidEmail } from "../utils/Formatter";
import Colors from "../utils/Colors";

import axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const defaultInputs = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    society: "",
    message: "",
    captcha: "",
  };
  const [inputs, setInputs] = useState(defaultInputs);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInput = (event) => {
    const target = event.target;
    setInputs({
      ...inputs,
      [target.id]: target.value,
    });
  };

  const handleCaptcha = (value) => {
    setInputs({ ...inputs, captcha: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    let tempError = "";

    if (
      !inputs.firstName ||
      !inputs.lastName ||
      !inputs.email ||
      !inputs.society ||
      !inputs.message
    ) {
      tempError = "Veuillez renseigner tous les champs.";
    } else if (!isValidEmail(inputs.email)) {
      tempError = "Le format du champ e-mail est incorrect.";
    } else if (!inputs.captcha) {
      tempError = "Veuillez cocher le captcha.";
    }

    if (!tempError) {
      await axios
        .post("https://api.swizen.fr:3030/api/v1/contact/create", {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          phone: inputs.phone,
          society: inputs.society,
          message: inputs.message,
        })
        .then((res) => {
          setInputs(defaultInputs);
          setError("");
          setSuccess(res.data.message);

          window.grecaptcha.reset();
        })
        .catch((err) => {
          window.grecaptcha.reset();
          setError(err.response.data.message);
        });
    } else {
      window.grecaptcha.reset();
      setError(tempError);
    }
  };
  return (
    <StyledContact>
      <Header />
      <Main>
        <Form onSubmit={onSubmit}>
          <Title align="center">
            Vous avez un projet ? <TitleSpan>Parlons-en !</TitleSpan>
          </Title>{" "}
          {error || success ? (
            <Alert type={error ? "error" : "success"}>{error || success}</Alert>
          ) : null}
          <FormGroups>
            <FormGroup>
              <FormLabel htmlFor="firstName">Prénom</FormLabel>
              <FormInput
                id="firstName"
                type="text"
                value={inputs.firstName}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Nom</FormLabel>
              <FormInput
                id="lastName"
                type="text"
                value={inputs.lastName}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>E-mail</FormLabel>
              <FormInput
                id="email"
                type="email"
                value={inputs.email}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Téléphone</FormLabel>
              <FormInput
                id="phone"
                type="tel"
                value={inputs.phone}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Société</FormLabel>
              <FormInput
                id="society"
                type="text"
                value={inputs.society}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea
                id="message"
                rows={3}
                value={inputs.message}
                onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <ReCAPTCHA
                sitekey="6LdoUmoiAAAAAPv4wGJ48KL7GOX_H63M-dGepuft"
                onChange={handleCaptcha}
              />
            </FormGroup>
            <FormGroup>
              <FormButton type="submit">Envoyer</FormButton>
            </FormGroup>
          </FormGroups>
        </Form>
      </Main>
      <Footer />
    </StyledContact>
  );
}

const StyledContact = styled.div``;
const Main = styled.main``;
const Form = styled.form`
  border-radius: 5px;
  padding: 20px;
  margin: 30px auto;
  max-width: 768px;
`;
const Title = styled.h2`
  text-align: ${(props) => props.align};
  color: ${Colors.DarkGray};
  margin: 0;

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
const TitleSpan = styled.span`
  color: ${Colors.Blue};
`;
const FormGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px 0 0 0;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FormLabel = styled.label``;
const FormInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid lightgray;
  transition: 0.2s;
  outline: none;
  font-family: inherit;

  &:hover {
    transition: 0.2s;
    border: 1px solid ${Colors.Blue};
  }
`;
const FormTextarea = styled.textarea`
  resize: vertical;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid lightgray;
  transition: 0.2s;
  outline: none;
  font-family: inherit;
  min-height: 100px;

  &:hover {
    transition: 0.2s;
    border: 1px solid ${Colors.Blue};
  }
`;
const FormButton = styled.button`
  color: white;
  font-family: inherit;
  background-color: ${Colors.Blue};
  border: none;
  padding: 10px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }
`;
const Alert = styled.p`
  color: ${(props) => (props.type === "error" ? "#d00000" : "#55a630")};
  border: 1px solid
    ${(props) => (props.type === "error" ? "#d00000" : "#55a630")};
  padding: 10px;
  text-align: center;
`;
