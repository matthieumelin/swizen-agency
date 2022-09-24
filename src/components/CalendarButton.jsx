import React from "react";

import styled from "styled-components";
import Colors from "../utils/Colors";

import { PopupButton } from "react-calendly";

export default function CalendarButton() {
  return (
    <StyledCalendarButton
      url="https://calendly.com/swizen/premiere-rencontre"
      rootElement={document.getElementById("root")}
      text="Organiser une rencontre 🚀"
    />
  );
}

const StyledCalendarButton = styled(PopupButton)`
  background-color: ${Colors.Blue};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 13px 15px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 1rem;
  font-family: inherit;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 40%);
  transition: 0.2s;
  display: none;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.LightBlue};
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
