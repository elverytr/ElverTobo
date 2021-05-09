import React, { Component } from 'react'
import styled from 'styled-components'
import Foto from '../img/tributo.png'

const Tile = styled.div`
    background-color:#424242;
    color:#000000;
    width:30%;
    border-radius:10px;
    margin:20px 0 0 20px;
    display:inline-block;
    padding: 10px;

    @media (max-width: 450px){
        width:100%;
        float:none;
        margin:10px 0 0 0;
    }

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

export default class PaginaTributo extends Component {
    render() {
        return (
            <Tile className='proyectTile'>
                <h4>La fotografía</h4>
                <Img src={Foto}/>
                <P>
                   Esta web es una página tributo a la fotografía, allí puedes ver diferentes tipos de fotografía y una pequeña descripción de la historia de la fotografía, donde además se dice el porque es un arte y también puedes encontrar algunas otras referencias para ver portafolios fotográficos y encontrar mas información. Es una página sencilla con una plantilla muy facil de reutilizar para algunos otros proyectos web.
                </P>
                <Btn href="https://elverytr.github.io/RetoPaginaTributo/" target="blank">Ver página</Btn>
            </Tile>
        )
    }
}
