import React from "react";
import styled from "styled-components";
import CardProyecto from "./CardProyecto";

const { proyectos } = require("../../data/projects.json");

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

  const proyts = [...proyectos];

  return (
    <>
      <Container id="proyectos">
        <p className="w-100 text-center">Proyectos</p>
        {proyts.map(({ nombre, link, foto, descripcion }) => (
          <CardProyecto
            nombre={nombre}
            link={link}
            foto={foto}
            descripcion={descripcion}
          />
        ))}
      </Container>
    </>
  );
}
