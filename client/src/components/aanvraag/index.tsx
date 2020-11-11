import React from 'react'
import ReactGA from "react-ga";
import styled from "styled-components";
import Form from './form'
import Header from './header'
import {respond} from '../../styles'
import SEO from "../seo";

export default function Aanvraag() {
  

  ReactGA.pageview("/offerte-aanvragen");

 

  return (
    <Container>
      <SEO
          title="IT Context - Offerte Aanvragen"
          description="Vraag gratis jouw offerte aan. Betaalbaar website laten maken."
          url="https://itcontext.nl"
          imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext-poster.jpg"
        />
      <Header/>
      <Content>
          <Form/>
      </Content>
    </Container>
    
  )
}
const Container = styled.section`

`
const Content = styled.div`
  
  padding: 5rem 2rem;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  perspective: 40rem;
`
const DetailsContainer = styled.div`
  width: 50rem;
  border-radius: 1rem;
  background-color: ${p=>p.theme.bg};
  padding: 2rem;
  margin: 5rem auto;
  box-shadow: 1rem 1rem 2rem rgba(0,0,0,.3);
  position: relative;
  z-index: 2;
  ${()=>respond('m','margin: 0 10rem;')}
  ${()=>respond('xxl','width: 55rem;')}
`
