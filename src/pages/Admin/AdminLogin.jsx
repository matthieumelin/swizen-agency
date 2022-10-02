import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import styled from "styled-components";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducers";

import LogoImage from "../../assets/images/logo-white.png";

import Colors from "../../utils/Colors";

export default function AdminLogin() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    captcha: false,
  });
  const [error, setError] = useState("");

  const handleInput = (event) => {
    const target = event.target;
    setInputs({
      ...inputs,
      [target.id]: target.id === "captcha" ? !inputs.captcha : target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    let tempError = "";

    if (!inputs.email || !inputs.password) {
      tempError = "Veuillez renseigner un e-mail et un mot de passe.";
    } else if (!inputs.captcha) {
      tempError = "Veuillez cocher le captcha.";
    }

    if (!tempError) {
      await axios
        .post("http://193.26.121.190:3030/api/v1/user/signin", {
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          const token = res.data.accessToken;

          sessionStorage.setItem("token", token);

          dispatch(setToken(token));

          navigate("/admin");

          setInputs({ email: "", password: "", captcha: false });
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    } else {
      setError(tempError);
    }
  };

  if (token) return <Navigate to="/admin" />;

  return (
    <StyledAdminLogin>
      <Logo src={LogoImage} alt="Swizen" />
      <Form onSubmit={onSubmit}>
        <FormTitle>Connexion</FormTitle>
        {error ? <Error>{error}</Error> : null}
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
            <FormLabel htmlFor="password">Mot de passe</FormLabel>
            <FormInput
              id="password"
              placeholder="********"
              type="password"
              value={inputs.password}
              onChange={handleInput}
            />
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
            <FormButton type="submit">Se connecter</FormButton>
          </FormGroup>
        </FormGroups>
      </Form>
    </StyledAdminLogin>
  );
}

const StyledAdminLogin = styled.div`
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
const Logo = styled.img`
  width: 180px;
  display: block;
  margin: 0 auto;
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
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }
`;
const Error = styled.p`
  color: #d00000;
  border: 1px solid #d00000;
  padding: 10px;
  text-align: center;
`;
