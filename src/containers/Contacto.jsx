import React, { Component } from 'react'
import styled from 'styled-components'

const Contact = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:70px;
`

const H3 = styled.h3`
    display:inline-block;
    width:100%;
    text-align:center;
    color:white;
`


export default class Contacto extends Component {
    render(children) {
        return (
            <>            
            <H3>Contáctame</H3>
            <Contact id="contact">
               {this.props.children} 
            </Contact>
            </>
        )
    }
}
