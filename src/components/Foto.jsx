import React, { Component } from 'react'
import imgPresentacion from '../img/foto.png'
import styled, { css } from "styled-components";


const Img = styled.img`
    width:45%;
    border-radius:10px;    
    float:left;
    &:hover{
        transform: rotate(1deg);
    }
`
export default class Foto extends Component {
    render() {
        return (
            <>
                <Img src={imgPresentacion} alt="Foto" style={{width:this.props.anchor},{width:this.props.anchor}}/>
            </>
        )
    }
}
