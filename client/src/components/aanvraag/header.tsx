import React from 'react'
import styled from 'styled-components'
import Img from '../../img/Poster.svg'
import {respond} from '../../styles'

export default function Header() {
  return (
    <Container>
      <img src={Img} alt="website aanbieding"/>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
  overflow: hidden;

  img{
    width: 125%;
    object-fit: cover;

    ${()=>respond('l','width: 100%;')}
  }
`
