import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { useIntl } from "react-intl";
import { respond, fonts, Button, ButtonEmpty, Anchor, Text } from "../../../styles";
import Img from '../../../img/header-landing.jpg'
import { FaInfo } from "react-icons/fa";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";

export default function InfoComponent() {

  const intl = useIntl()

  return (
    <Info>
      <InfoContent>
          <InfoHeader>
              <Icon>   
                  <FaInfo/> 
              </Icon>
                                
              <h3>
                  {intl.formatMessage({
                      id: "landing.header-info-1",
                      defaultMessage: "tot je dienst",
                  })}
              </h3>
              
          </InfoHeader>
          <TextHeader>
              {intl.formatMessage({
                  id: "landing.header-info-2",
                  defaultMessage:
                      "Wij werken van maandag t / m vrijdag tussen 9.00 en 17.00 uur. Wij zijn gevestigd in Purmerend, maar werken in heel Nederland. Heb je vragen? Onze klantenservice staat voor je klaar.",
              })}
          </TextHeader>
          <ContactData color="#0F284E" href="tel:0299705072">
              <RiPhoneLine />
              <span>0299 70 50 72</span>
          </ContactData>
          <ContactData color="#006A93" href="mailto:info@itcontext.nl">
              <RiMailLine />
              <span>info@itcontext.nl</span>
          </ContactData>
          <TextHeader>
              {intl.formatMessage({
                      id: "landing.header-2-header",
                      defaultMessage:
                          "Bereik de juiste doelgroep en overtuig hen om contact met je op te nemen",
                  })}
          </TextHeader>
            <Buttons>
              <Link to='/website-ontwerpen'><Button>Website</Button></Link>
              <Link to='/online-marketing'><ButtonEmpty>Marketing</ButtonEmpty></Link>
          </Buttons>
          
      </InfoContent>
  </Info>
  )
}
const Info = styled.div`
    overflow-x: hidden;
    
    background-size: cover;
    background-repeat: no-repreat;
    background-position: center;
    padding: 4.7rem 2.2rem;
    

    ${()=>respond('l',`background-image: linear-gradient(to right, rgba(202, 244, 253,1),rgba(202, 244, 253,.1)), url(${Img});   padding: 4.7rem;`)}

    ${()=>respond('xxl','padding: 13.8rem;')}
`
const InfoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

`
const InfoContent = styled.div`
    
    max-width: 40rem;
    margin: 0 0 0 0;
    display: flex;
    flex-direction: column;

    ${()=>respond('l','margin: 0 0 0 auto;')}

   
   
    h3{
        font-family: ${fonts.exo};
        font-size: 3.3rem;
        text-transform: capitalize;
        font-weight: 800;
        color: ${p=>p.theme.primary};
        margin-left: 1rem;
    }
     svg{
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        color: ${p=>p.theme.primary};
    }
`
const ContactData = styled.a`
    width: 35rem;
    text-decoration: none;
    padding: .9rem 2.3rem;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    background-color: ${(props) => props.color};
    border-radius: 3px;
    transition: all 0.3s;
    position:relative;
    z-index: 2;

    ${()=>respond('xxl','margin: .5rem 0; width: 35rem;')}

    &:hover {
        background-color: transparent;
        border: 1px solid ${(props) => props.color};

        svg {
            color: ${(props) => props.color};
        }
        span {
            color: ${(props) => props.color};
        }
    }
    svg {
        margin-right: 2rem;
        align-self: center;
        font-size: 4rem;
        color: snow;
    }
    span {
        color: snow;
        font-size: 3rem;
        font-family: ${fonts.jura};
    }
`
const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p=>p.theme.primary};
    border: 2px solid ${p=>p.theme.primary};
    transition: all .3s;

    &:hover{
        transform: scale(1.2);
    }

    svg{
        margin-right: 0;
        width: 3rem;
        height: 3rem;
        color: ${p=>p.theme.primary};
    }
`
const Buttons = styled.div`
    margin-bottom: 2.3rem;
    button{
        margin-right: 2rem;
    }
    a{
        text-decoration: none;
    }
`
const TextHeader = styled.p`

        margin-top: 2.2rem;
        margin-bottom: 4.7rem;
        font-family: ${fonts.cormoran};
        font-weight: 600;
        font-size: 1.9rem;
        color: ${p=>p.theme.greyDark};
        max-width: 40rem;
        line-height: 1.3;
        letter-spacing: .2rem;
        
        position: relative;
    
`