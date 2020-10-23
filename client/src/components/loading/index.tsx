import React from 'react'
import styled from 'styled-components'
import Loading from '../../img/loading.svg'
import {Text} from '../../styles'

export default function() {
  return (
    <Container>
      <img src={Loading} alt="loading"/>
      <Text>Loading data...</Text>
    </Container>
  )
}

const Container = styled.section`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f2f3;

`