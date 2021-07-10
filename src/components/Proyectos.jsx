import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { loadContent } from "../helpers/loadProyects";
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
  let { proyectos } = require("./projects.json");
  proyectos = [...proyectos];
  const startGetContent = async () => {
    const content = await loadContent();
    return content;
  };
  console.log(startGetContent());

  return (
    <>
      <Container id="proyectos">
        <p className="w-100 text-center">Proyectos</p>
        {proyectos.map(({ nombre, link, foto, descripcion }) => (
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
