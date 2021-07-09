import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CardProyecto from "./CardProyecto";

const Container = styled.div`
margin-top: 50px;
padding-top: 50px;
border-top: 3px dashed #333;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
  width: 100%;
`;

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([
    { nombre: "P1", link: "https://P1.com", foto: "https://P1.jpg" },
    { nombre: "P2", link: "https://P2.com", foto: "https://P2.jpg" },
    { nombre: "P3", link: "https://P3.com", foto: "https://P3.jpg" },
    { nombre: "P4", link: "https://P4.com", foto: "https://P4.jpg" },
    { nombre: "P5", link: "https://P5.com", foto: "https://P5.jpg" },
  ]);
  return (
    <Container>
      {proyectos.map(({ nombre, link, foto }) => (
        <CardProyecto nombre={nombre} link={link} foto={foto} />
      ))}
    </Container>
  );
}
