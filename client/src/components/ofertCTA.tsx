import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { fonts, respond, Text, Button } from "../styles";

export default function () {
  return (
    <Container>
      <Link to='/offerte-aanvragen'>
      <CustomButton>
        Vraag direct oferte aan
      </CustomButton>
      </Link>
    </Container>
  )
}
const Container = styled.div`
  margin: 5rem auto;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const CustomButton = styled(Button)`
  background-color: ${p=>p.theme.warm};
  border: 1px solid ${p=>p.theme.warm};
  border-radius: 3px;
  box-shadow: 0 0 3rem ${p=>p.theme.warm};

  &:hover{
    color: ${p=>p.theme.warm};
  }

  
`