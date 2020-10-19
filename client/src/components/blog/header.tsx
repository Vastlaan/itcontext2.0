import React from 'react'
import styled from "styled-components";
import {respond, fonts,Text} from '../../styles'

export default function () {

  return (
    <Container>
      <Heading>Tech <span>Blog</span></Heading>
      <Line></Line>
      <CustomText>only english version available</CustomText>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;

  padding: 2rem;
  background-color: ${p=>p.theme.greyDark};


`
const Heading= styled.h1`
  font-size: 5rem;
  letter-spacing: .3rem;
  font-weight: 300;
  font-family: ${fonts.advent};
  color: white;
  text-align: center;

  span{
    color: ${p=>p.theme.primaryLight};
  }

  ${()=>respond('m','text-align: left;')}

`

const Line = styled.div`
  margin: 1rem auto;
  width: 50%;
  height: 1px;
  background-color: ${p=>p.theme.primaryLight};
  ${()=>respond('m','margin: 1rem;')}
  
`
const CustomText = styled(Text)`
  color: ${p=>p.theme.greyLight};
`