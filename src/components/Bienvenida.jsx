import React, { Component } from 'react'
import styled, {css} from 'styled-components'

const Seccion = styled.section`
    padding:15px;
    display:inline-flex;
    direction:row;
    align-items:center;
    width:100%;
    height:100vh;
    box-sizing:border-box;

    @media (max-width: 450px){
        display:inline-block;
        height:auto;
    }

`

export default class Presentacion extends Component {
    render() {
        return (
            <Seccion id="welcome-section">
                {this.props.children}
            </Seccion>
        )
    }
}
