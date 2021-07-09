import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 3px dashed #333;
`;

export default function Bienvenida() {
  return (
    <Container>
      <p className="container">
        Hola, me presento. Soy Elver Tobo, estoy proximo a graduarme como
        <b> ingeniero de software</b> y me capacité de manera independiente como
        <b> Front-end Developer</b>, a través de cursos, bootcamps y hackathones
        <b> altamente exigentes</b>.
        <br />
        <br />
        Tengo los conocimientos necesarios para trabajar con <b> React</b>y{" "}
        <b> JavaScript moderno</b>, utilizar marcos de estilos CSS y diversas
        librerías. Aunque a un nivel mas básico, debo mencionar que también
        manejo el lenguaje de consulta estructurado <b>SQL</b>, los lenguajes de programación{" "}
        <b>PHP</b> y <b>Matlab</b> y el lenguaje estadístico <b>R</b>.
        <br />
        <br />
        Finalmente quiero mencionar que en mi capacitación he tenido la
        oportunidad de trabajar con <b>diversos grupos de trabajo</b>, lo cual me ha
        permitido apropiarme de diferentes habilidades para tal labor, tales
        como como comunicación acertiva, empatía, administración correcta del
        tiempo y colaborar de manera fluida con mis colegas de trabajo.
      </p>
    </Container>
  );
}
