import React, { Component } from 'react'
import styled from 'styled-components'
import Foto from '../img/robots.png'

const Tile = styled.div`
    background-color:#424242;
    color:#000000;
    width:30%;
    border-radius:10px;
    margin:0 0 0 20px;
    display:inline-block;
    padding: 10px;
`
const Img = styled.img`
    width:90%;
`
const P = styled.p`
    text-align:justify;
    font-size:1.2rem;
    font-family:Arial;
    width:90%;
    display:inline-block;
    margin-top:1.2rem;
    line-height:1.2rem;
    text-indent:15px;
    color:rgb(0, 0, 0);
    font-weight:300;
`

const Btn = styled.a`
    width:90%;
    padding:5px;
    border-radius:5px;
    background-color:#000000;
    display:inline-block;
    color:white;
    text-decoration:none;
    font-size:1.2rem;
    &:hover{
        color:#acacac;
    }
`
export default class Robots extends Component {
    render() {
        return (
            <Tile className='proyectTile'>
                <h4>Robots</h4>
                <Img src={Foto}/>
                <P>
                    Esta es una página de aterrizaje de una comercializadora de robots, tiene tre distintos tipos de robots, además un video de presentación y un campo de texto donde podrás introducir tu correo para recibir inforción detallada por email.
                </P>
                <Btn href="https://elverytr.github.io/RetoPaginaAterrizaje/" target="blank">Ver página</Btn>
            </Tile>
        )
    }
}
