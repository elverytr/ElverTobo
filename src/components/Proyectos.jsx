import React, { Component } from "react";
import styled, { css } from 'styled-components'

const Proyects = styled.div`
    width:100%;
    text-align:center;
    background-color:white;
    padding:50px;
       
    @media (max-width: 450px){
        display:inline-block;
        padding:50px;
    }
    `
const H1 = styled.h1`
    margin-bottom:100px;
    @media (max-width: 450px){
        margin-bottom:20px;
    }
`

export default class Proyectos extends Component {
  render(children) {
    return (
      <Proyects id="proyects">
          <H1 id="proyects">Algunos de mis proyectos</H1>
            {this.props.children}
      </Proyects>
    );
  }
}
