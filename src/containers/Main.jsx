import React, { Component } from "react";
import styled, { css } from "styled-components";

const Section = styled.section`
  width:100%;
`

export default class Main extends Component {

  render(children) {
    return (
    <Section className="App">
      {this.props.children}
    </Section>
    )
  }
}
