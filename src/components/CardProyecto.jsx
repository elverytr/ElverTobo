import React from "react";
import styled from "styled-components";

const Container = styled.a`
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.44);
  background-color: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: space-between;
  flex-wrap: wrap;
  height: 400px;
  width: 70%;
  padding: 30px;
  h1 {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 100%;
  border-radius: 5px;
  border: #333 solid 1px;
  box-shadow: inset 5px 5px 15px 5px rgba(0,0,0,0.44);
`;
const Info = styled.div`
  width: 50%;
  text-align: center;
`;
const Nombre = styled.h3`
  color: #7eb8ff;
  font-size: 1.5rem;
`;

const Descripcion = styled.p`
  color: #333;
  text-align: left;
  width: 100%;
  padding: 10px;
`;

export default function CardProyecto({ nombre, link, foto, descripcion }) {
  return (
    <Container href={link} target="_blank">
      <Img src={foto} />
      <Info>
        <Nombre>{nombre}</Nombre>
        <Descripcion>{descripcion}</Descripcion>
      </Info>
    </Container>
  );
}
