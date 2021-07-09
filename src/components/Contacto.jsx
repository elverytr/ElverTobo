import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 50px;
padding-top: 50px;
border-top: 3px dashed #333;
    width: 100%;
    height: 300px;  
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export default function Contacto() {
    return (
        <Container>
            <a href="#">Linkedin</a>
            <a href="#">Github</a>
            <a href="#">Gmail</a>
            <a href="#">Whatsapp</a>
        </Container>
    )
}
