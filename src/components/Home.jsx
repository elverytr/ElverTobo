import React from "react";
import Header from "./Header";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import Bienvenida from "./Bienvenida";

export default function Home() {
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
