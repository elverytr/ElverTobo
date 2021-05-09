import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Contenedor = styled.div`    
  width:100%;   
  background-color:#424242;
`

export default class Cuerpo extends Component {
    render(children) {
        return (
            <Contenedor>
                {this.props.children}
            </Contenedor>
        )
    }
}
