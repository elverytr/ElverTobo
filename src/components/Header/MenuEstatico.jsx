import React from "react";

export default function MenuEstatico() {
  return (
    <div className="links">
      <a href="#presentacion">Presentación</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
      <a
        href="#"
        className="text-warning"
        onClick={() => {
          alert(
            "Esta opción solo está habilitada para usuarios con permisos de administrador. Lamento las molestias causadas y te invito a seguir explorando."
          );
        }}
      >
        Administrar
      </a>
    </div>
  );
}
