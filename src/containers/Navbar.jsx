import React, { Component } from "react";
import styled, { css } from "styled-components";

const Button = styled.a`
  color: white;
  text-decoration:none;
`;

const Nav = styled.li`
 position:fixed;
  top:0;
  background-color: #000000;
  height: 50px;
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: flex-end;  
  width: 100%;
  position: fixed;

  @media (max-width: 450px){
  justify-content:center;
}

`;

const Li = styled.li`
    list-style: none;
    display:inline;
    padding-left:3px;    
    padding-right:3px;
    font-size:20px;
    margin: 0 1% 0 1%;
`;




export default class Navbar extends Component {
  render() {
    return (
      <>
        <Nav id='navbar'>
            <Li>
              <Button href='#welcome-section'>Bienvenida</Button>
            </Li>
            <Li>
              <Button href='#proyects'>Proyectos</Button>
            </Li>
            <Li>
              <Button href='#contact'>Contacto</Button>
            </Li>
        </Nav>
      </>
    );
  }
}
