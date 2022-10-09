import React from "react";

import styled from "styled-components";

import Colors from "../utils/Colors";

export default function Loading() {
  return <StyledLoading />;
}

const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${Colors.Blue};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    opacity: 1;
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 6em;
    height: 6em;
    border: 1.1em solid lightgray;
    border-left: 1.1em solid #ffffff;
    border-radius: 50%;
    animation: load 1.1s infinite linear;
    transition: opacity 0.3s;
  }

  @keyframes load {
    0% {
      opacity: 1;
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      opacity: 0;
    }
  }
`;
