import React, { useState } from 'react'

import styled from 'styled-components'

import Footer from '../components/Footer';
import Header from '../components/Header';

import { isValidEmail } from "../utils/Formatter";
import Colors from '../utils/Colors';

import axios from 'axios';

export default function Contact() {
    const defaultInputs = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        society: "",
        message: "",
        captcha: false,
    };
    const [inputs, setInputs] = useState(defaultInputs);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleInput = (event) => {
        const target = event.target;
        setInputs({
            ...inputs,
            [target.id]: target.id === "captcha" ? !inputs.captcha : target.value,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        setError("");

        let tempError = "";

        if (!inputs.firstName || !inputs.lastName || !inputs.email || !inputs.society
            || !inputs.message) {
            tempError = "Veuillez renseigner tous les champs.";
        } else if (!isValidEmail(inputs.email)) {
            tempError = "Le format du champ e-mail est incorrect."
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
                    message: inputs.message
                })
                .then((res) => {
                    setInputs(defaultInputs);
                    setSuccess(res.data.message);
                })
                .catch((err) => {
                    setError(err.response.data.message);
                });
        } else {
            setError(tempError);
        }
    };
    return (
        <StyledContact>
            <Header />
            <Main>
                <Form onSubmit={onSubmit}>
                    <FormTitle>Vous avez un projet ? Parlons en !</FormTitle>
                    {error || success ? <Alert type={error ? "error" : "success"}>{error || success}</Alert> : null}
                    <FormGroups>
                        <FormGroup>
                            <FormLabel htmlFor="firstName">Prénom</FormLabel>
                            <FormInput id="firstName" type="text" value={inputs.firstName} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Nom</FormLabel>
                            <FormInput id="lastName" type="text" value={inputs.lastName} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>E-mail</FormLabel>
                            <FormInput id="email" type="email" value={inputs.email} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Téléphone</FormLabel>
                            <FormInput id="phone" type="tel" value={inputs.phone} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Société</FormLabel>
                            <FormInput id="society" type="text" value={inputs.society} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Message</FormLabel>
                            <FormTextarea id="message" rows={3} value={inputs.message} onChange={handleInput} />
                        </FormGroup>
                        <FormGroup>
                            <FormWrapper>
                                <FormInput
                                    id="captcha"
                                    type="checkbox"
                                    value={inputs.captcha}
                                    onChange={handleInput}
                                />
                                <FormLabel htmlFor="captcha">
                                    Je ne suis pas un robot 🤖
                                </FormLabel>
                            </FormWrapper>
                        </FormGroup>
                        <FormGroup>
                            <FormButton type="submit">Envoyer</FormButton>
                        </FormGroup>
                    </FormGroups>
                </Form>
            </Main>
            <Footer />
        </StyledContact>
    )
}

const StyledContact = styled.div``;
const Main = styled.main``;
const Form = styled.form`
border-radius: 5px;
padding: 20px;
margin: 30px auto;
max-width: 768px;
`;
const FormTitle = styled.h2`
color: ${Colors.DarkBlue};
text-align: center;
margin: 0;
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
  transition: 0.2s;
  background-color: ${Colors.LightBlue};
}
`;
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Alert = styled.p`
  color: ${(props) => props.type === "error" ? "#d00000" : "#55a630"};
  border: 1px solid ${(props) => props.type === "error" ? "#d00000" : "#55a630"};
  padding: 10px;
  text-align: center;
`;