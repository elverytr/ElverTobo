import React, { Component } from "react";
import styled, { css } from 'styled-components'

const Proyects = styled.div`
    width:100%;
    text-align:center;
    background-color:white;
    padding:20px;
    `
const H1 = styled.h1`
    margin-bottom:100px;
`

export default class Proyectos extends Component {
  render(children) {
    return (
      <Proyects id="proyects">
          <H1>Algunos de mis proyectos</H1>
            {this.props.children}
      </Proyects>
    );
  }
}
