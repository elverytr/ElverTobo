import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 40px;
    margin:10px;
`

export default function SocialMedia() {
    return (
        <>
            <p>
                <a href="https:/www.facebook.com" target="blank"><Img src="https://image.flaticon.com/icons/png/128/145/145802.png"/></a>
                <a href="https:/github.com/elverytr" target="blank"><Img src="https://image.flaticon.com/icons/png/128/1051/1051326.png"/></a>
                <a href="mailto:elvertobo2017@gmail.com" target="blank"><Img src="https://image.flaticon.com/icons/png/128/720/720277.png"/></a>
                <a href="https://www.linkedin.com/in/elver-yamit-tobo-ramirez-5048591a2/"><Img src="https://image.flaticon.com/icons/png/128/145/145807.png"/></a>
            </p>
        </>
    )
}
