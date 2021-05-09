import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Contenido = styled.div`
    background-color:rgb(0, 0, 0);
    width:48%;
    margin: 3%;
    border-radius:30px;
    border: 1px black line;
    text-align:center;
    color:white;
    padding:3%;
    &:hover {
      background-color:white;
      color:black;
    }
`

const Titulo = styled.h1`
    width:100%;
`

const Sub = styled.h4`

`

const Article = styled.article`
    width: 70%;
    display:inline-block;
    text-align: justify;
`

export default class Bio extends Component {
    render() {
        return (
            <Contenido>
                <Titulo>Hola</Titulo>
                <Sub>Soy Elver Tobo</Sub>
                <Article>
                    Estudiante de sexto semestre de Ingeniería en Software y desarrollador Front-End en formacion.
                </Article>
            </Contenido>
        )
    }
}
