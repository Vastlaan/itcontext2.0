import React, {useState} from 'react'
import styled from "styled-components";
import { useIntl } from "react-intl";
import {fonts, respond, Button, Text} from '../../styles'
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

  function sendBrochure(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(!isChecked){
      return setWarning(true)
    }
    console.log(email)
  }

  return (
    <Form onSubmit={sendBrochure}>
        <Header>
          <AiOutlineForm/>
          {intl.formatMessage({id:"offerte.header-1",defaultMessage:"Een Offerte Aanvragen"})}
        </Header>
        <Text>{intl.formatMessage({id:"offerte.text",defaultMessage:"Bestel een gratis brochure en lees meer over onze diensten en prijzen."})}</Text>
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
      </Form>
  )
}
const Form = styled.form`
  width: 40rem;
  border-radius: 1rem;
  background-color: ${p=>p.theme.bg};
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 1rem -1rem 2rem rgba(0,0,0,.3);

  ${()=>respond('m','margin: 0 10rem;')}
`

const Header = styled.h1`
  display: flex;
    align-items: center;
    font-family: ${fonts.advent};
    font-size: 3rem;
    color: ${p=>p.theme.grey};

    svg{
      margin-right: 1rem;
      color: ${p=>p.theme.fresh};
    }
`
const HeaderSmall = styled.h3`
  display: flex;
    align-items: center;
    font-family: ${fonts.advent};
    font-size: 2.5rem;
    color: ${p=>p.theme.grey};

    svg{
      margin-right: 1rem;
      color: ${p=>p.theme.fresh};
    }
`;
const InputField = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label{
    font-family: ${fonts.gayathri};
    font-size: 2.5rem;
    color: ${p=>p.theme.fresh};
  }

  input{
    border: 1px solid ${p=>p.theme.fresh};
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
  margin: 3rem 0;
  background-color: ${p=>p.theme.primaryLight};
  border: 1px solid ${p=>p.theme.primaryLight};
  border-radius: 3px;

`;

const CheckboxField = styled.div`
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
      top: -.5rem;
      left: 2rem;
      background-color: ${p=>p.theme.warm};
      color: white;
      font-size: 1.2rem;
`
