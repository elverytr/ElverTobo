import React from "react";
import Header from "./Header/Header";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos/Proyectos";
import Bienvenida from "./Bienvenida";
import "../styles/scss/main.scss"

export default function Main() {
  return (
    <>
      <Header />
      <div>
        <Bienvenida/>
        <Proyectos/>
        <Contacto />
      </div>
    </>
  );
}
