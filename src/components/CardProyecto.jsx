import React from "react";
import styled from "styled-components";

const Container = styled.a`
  background-color: #333;
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 400px;
  width: 70%;
  h1 {
    font-size: 1rem;
  }
`;

export default function CardProyecto({ nombre, link, foto }) {
  return (
    <Container href={link}>
      <h1>CARD</h1>
      <h1>{nombre}</h1>
      <h1>{foto}</h1>
    </Container>
  );
}
