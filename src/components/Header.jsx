import React from "react";
import styled from "styled-components";
import "../styles/css/header.scss";

const Img = styled.img``;

export default function Header() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Img
              src="https://i.ibb.co/rbpMw9G/man-1839500-1280.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Img
              src="https://i.ibb.co/qBdHTRV/people-2557396-1280.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Img
              src="https://i.ibb.co/CQzJfqx/programming-2115930-1280.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="navbar">
        Elver Tobo - Front-end developer
        <div className="links">
          <a href="#presentacion">Presentación</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <a href="#" className="text-warning" onClick={()=>{alert("Esta opción solo está habilitada para usuarios con permisos de administrador. Lamento las molestias causadas y te invito a seguir explorando.")}}>
            Administrar
          </a>
        </div>
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
