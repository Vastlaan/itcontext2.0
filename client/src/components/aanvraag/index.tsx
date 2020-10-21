import React from 'react'
import ReactGA from "react-ga";
import styled from "styled-components";
import Form from './form'
import Details from '../details'
import {respond} from '../../styles'
import SEO from "../seo";

export default function Aanvraag() {
  

  ReactGA.pageview("/offerte-aanvragen");

 

  return (
    <Container>
        <SEO
          title="IT Context - Offerte Aanvragen"
          description="Vraag gratis jouw offerte aan. Betaalbaar website laten maken."
          url="http://itcontext.nl"
          imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/ITContextLandingPage.jpg"
        />
        <Circles/>
        <Form/>
        <DetailsContainer>
          <Details/>
        </DetailsContainer>
        
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  padding: 5rem 2rem;
  width: 100%;
  min-height: 80vh;
  background-image: linear-gradient(to right, ${p=>p.theme.primaryLight} 50%, transparent 50%);
  display:flex;
  flex-direction: column;
  overflow:hidden;

  ${()=>respond('m','flex-direction: row; justify-content: center;')}

`

const Circles = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,0);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    z-index: -1;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(50%, 0%);
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

const DetailsContainer = styled.div`
  width: 40rem;
  border-radius: 1rem;
  background-color: ${p=>p.theme.bg};
  padding: 2rem;
  margin: 5rem auto;
  box-shadow: 1rem -1rem 2rem rgba(0,0,0,.3);
  ${()=>respond('m','margin: 0 10rem;')}
  ${()=>respond('xxl','width: 50rem;')}
`
