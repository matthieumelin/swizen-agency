import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import styled from 'styled-components'

import Colors from '../../utils/Colors';

import axios from 'axios';

export default function AdminDashboard() {
  const token = useSelector((state) => state.user.token);

  const defaultInputs = {
    email: "",
    firstName: "",
    lastName: ""
  };
  const [inputs, setInputs] = useState(defaultInputs);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleInput = (event) => {
    const target = event.target;
    setInputs({
      ...inputs,
      [target.id]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setError("");

    let tempError = "";

    if (!inputs.email || !inputs.firstName || !inputs.lastName) {
      tempError = "Veuillez renseigner tous les champs.";
    }

    if (!tempError) {
      await axios
        .post("https://api.swizen.fr:3030/api/v1/mail/client/create", {
          clientEmail: inputs.email,
          clientFirstName: inputs.firstName,
          clientLastName: inputs.lastName
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res) => {
          setSuccess("Le client vient d'être créé.");
          setInputs(defaultInputs);
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    } else {
      setError(tempError);
    }
  }

  if (!token) return <Navigate to="/admin/login" />;

  return (
    <StyledAdminDashboard>
      <Form onSubmit={onSubmit}>
        <FormTitle>Créer une démarche client</FormTitle>
        {error || success ? <Alert type={error ? "error" : "success"}>{error || success}</Alert> : null}
        <FormGroups>
          <FormGroup>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput
              id="email"
              placeholder="mon@email.fr"
              type="email"
              value={inputs.email}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="firstName">Prénom</FormLabel>
            <FormInput
              id="firstName"
              placeholder="John"
              type="firstName"
              value={inputs.firstName}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="lastName">Nom</FormLabel>
            <FormInput
              id="lastName"
              placeholder="Doe"
              type="text"
              value={inputs.lastName}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <FormButton type="submit">Créer</FormButton>
          </FormGroup>
        </FormGroups>
      </Form>
    </StyledAdminDashboard>
  )
}

const StyledAdminDashboard = styled.div`
background: linear-gradient(
  180deg,
  rgba(7, 106, 255, 1) 0%,
  rgba(26, 117, 255, 1) 100%
);
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Form = styled.form`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 7%);
  margin: 30px 20px;
  width: 300px;
`;
const FormTitle = styled.h1`
  color: ${Colors.DarkBlue};
  text-align: center;
  margin: 0;
  font-weight: 500;
`;
const FormGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 0 0;
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
const FormButton = styled.button`
  color: white;
  font-family: inherit;
  background-color: ${Colors.Blue};
  border: none;
  padding: 10px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }
`;
const Alert = styled.p`
  color: ${(props) => props.type === "error" ? Colors.Red : Colors.Green};
  border: 1px solid ${(props) => props.type === "error" ? Colors.Red : Colors.Green};
  padding: 10px;
  text-align: center;
`;