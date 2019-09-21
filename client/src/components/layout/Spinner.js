import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  margin: auto;
  display: block;
  opacity: 0.9;
  img {
    background: #000;
  }
`;

export default () => (
  <Img>
    <img src={spinner} alt='loading...' />
  </Img>
);
