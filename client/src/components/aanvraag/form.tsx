import React, {useEffect, useRef, useState} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from "styled-components";
import { useIntl } from "react-intl";
import {fonts, respond, Button, Text} from '../../styles'
import Confirmation from '../confirmation'
import Decoration from '../decoration'
import Img from '../../img/offer-header.png'
import Details from '../details'
import {AiOutlineForm} from 'react-icons/ai'
import {RiMailSendLine, RiSendPlane2Line} from 'react-icons/ri'

interface LabelProps{
    isChecked: boolean;
  }

export default function() {

  const intl = useIntl()

  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [warning, setWarning] = useState(false)
  const [displayConfirmation, setDisplayConfirmation] = useState(false)

  function sendBrochure(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(!isChecked){
      return setWarning(true)
    }
    const offerFormData = { email }
    fetch('/api/sendOffer',{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(offerFormData)
    }).then(res=>res.json())
      .then(data=>data==="Success" && setDisplayConfirmation(true))
      .catch(e=>console.error(e))
  }

  const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

  return (
    <Container ref={content}>
      <Form onSubmit={sendBrochure}>
          <Header>
            {intl.formatMessage({id:"offerte.header-1",defaultMessage:"Een Offerte Aanvragen"}).split(' ').map((w,i,a)=>i!==(a.length-1)?<strong key={i* 2.17}>{w} </strong>:<span key={i* 2.17}>{w} </span>)}
          </Header>
          <Text style={{margin: '1rem 0 2rem 0', textAlign: 'left'}}>{intl.formatMessage({id:"offerte.text",defaultMessage:"Bestel een gratis brochure en lees meer over onze diensten en prijzen."})}</Text>
          <HeaderSmall>
            <RiMailSendLine/>
            {intl.formatMessage({id:"offerte.header-2",defaultMessage:"E-mailadres doorgeven"})}
          </HeaderSmall>
          <InputField>
            <label htmlFor="email">{intl.formatMessage({id:"offerte.label",defaultMessage:"Jouw e-mailadres:"})}</label>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
          </InputField>
          <HeaderSmall>
            <RiSendPlane2Line/>
            {intl.formatMessage({id:"offerte.header-3",defaultMessage:"Bestel Gratis Offerte"})}        
          </HeaderSmall>
          <CheckboxField>
            <Label htmlFor="check" isChecked={isChecked} onClick={()=>{
              setIsChecked(prevState=>!prevState)
              setWarning(false)
              }}>
              <div></div>
              {warning&&<Warning>{intl.formatMessage({id:"offerte.warning",defaultMessage:"ga aub akkoord met onze voorwaarden"})}</Warning>}
              <span>
                {intl.formatMessage({id:"offerte.disclaimer-1",defaultMessage:"ik ga akkoord met de"})} 
                <a href="/algemene-voorwaarden">{intl.formatMessage({id:"offerte.disclaimer-2",defaultMessage:"voorwaarden"})} </a>
                {intl.formatMessage({id:"offerte.disclaimer-3",defaultMessage:"en het"})}  
                <a href="/cookies">{intl.formatMessage({id:"offerte.disclaimer-4",defaultMessage:"Privacybeleid"})} </a>
              </span>
            </Label>
            <input type="checkbox" name='check' />
          </CheckboxField>
          <CustomButton type='submit'>{intl.formatMessage({id:"offerte.button",defaultMessage:"Direct Aanvragen"})}</CustomButton>
          <Decoration gap='1rem'/>
          {displayConfirmation && (
                      <Confirmation
                          setDisplayConfirmation={setDisplayConfirmation}
                          message1="contact.confirmation-3"
                          message2="contact.confirmation-4"
                      />
                  )}
        </Form>
        <Images>
          <Decoration gap="2rem" color="#006A93" style={{gridTemplateColumns: 'repeat(5,1fr)', gridTemplateRows: 'repeat(20,1fr)'}}/>
        </Images>
      </Container>
  )
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.2rem;
  

  ${()=>respond('l','grid-template-columns: 1fr 1fr;')}
`
const Images = styled.div`

  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 6.8rem 2.2rem;

  ${()=>respond('l','display: flex;')}

`
const Form = styled.form`
  padding: 2.2rem;
  position: relative;
  z-index: 2;


  ${()=>respond('m','')}
  ${()=>respond('xxl','padding: 6.8rem 2.2rem;')}
`

const Header = styled.h1`
    color: ${(p)=>p.theme.primary};
    font-size: 6rem;
    font-weight: 900;
    font-family: ${fonts.exo};
    letter-spacing: -.1rem;
    line-height: 1;

    span{
        font-weight: 800;
        line-height: 1;
        letter-spacing: -.2rem;
        color: ${p=>p.theme.primaryLight};
        
    }
    strong{
        font-weight: 900;
        font-size: 6rem;
        line-height: 1;
    }

    ${()=>respond('xxl','font-size: 6rem;')}
`;
const HeaderSmall = styled.h3`
  display: flex;
    align-items: center;
    font-family: ${fonts.exo};
    font-weight: 900;
    font-size: 2.8rem;
    color: ${p=>p.theme.primary};
    max-width: 40rem;

    svg{
      margin-right: 1rem;
      color: ${p=>p.theme.primary};
    }
`;
const InputField = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label{
    font-family: ${fonts.gayathri};
    font-size: 2.5rem;
    color: ${p=>p.theme.primary};
  }

  input{
    border: 1px solid ${p=>p.theme.primary};
    background-color:white;
    padding: 1rem 3rem;
    text-align: center;
    font-size: 2.2rem;
    color: ${p=>p.theme.greyDark};

    &:active,:focus{
      outline: none;
    }
  }

`;

const CustomButton = styled(Button)`
  margin: 2rem 0 3rem 0;
  background-color: ${p=>p.theme.primary};
  border: 1px solid ${p=>p.theme.primary};
--  border-radius: 3px;

`;

const CheckboxField = styled.div`
  margin-top:2rem;
  position: relative;
  height: 3rem;

  input{
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 5rem;
    height: 5rem;
    visibility: hidden;

  }

`;

const Label = styled.label<LabelProps>`

    div{
      position: absolute;
      top: 1rem;
      left: 0rem;
      width: 2rem;
      height: 2rem;
      border: 3px solid ${p=>p.isChecked?p.theme.fresh:p.theme.fresh };
      box-shadow: 0 0 1rem rgba(0,0,0,.3);
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s;

      &:after{
        content: "";
        position: absolute;
        top: 50%;
        left:50%;
        width: 1.3rem;
        height: 1.3rem;
        transform: translate(-50%, -50%);
        background-color: ${p=>p.isChecked?p.theme.fresh: 'transparent'};
        border-radius: 50%;
      }
    }
    span{
      display: block;
      margin-left:3rem;
      transform: translateY(1rem);
      font-size: 1.4rem;
      color: ${p=>p.theme.grey};

      a{
        color: ${p=>p.theme.primaryLight};
      }
    }
    
`

const Warning = styled.p`
    position: absolute;
    padding: 0 1rem;
    width: 30rem;
      top: -1.5rem;
      left: 2rem;
      background-color: ${p=>p.theme.warm};
      color: white;
      font-size: 1.2rem;
`
