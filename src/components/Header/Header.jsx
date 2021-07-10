import React from "react";
import "../../styles/scss/header.scss";
import Slider from "./Slider";
import MenuDesplegable from "./MenuDesplegable";
import MenuEstatico from "./MenuEstatico";

export default function Header() {
  return (
    <>
      <Slider />
      <div className="navbar">
        Elver Tobo - Front-end developer
        <MenuDesplegable />
        <MenuEstatico />
      </div>
      <div
        className="beta"
        title="Aún hay varias actualizaciones pendientes debido a inconvenientes con la conexión a internet en el departamento de Arauca (lugar de residencia). Pronto se estará actualizando el portafolio."
      >
        Beta
      </div>
    </>
  );
}
