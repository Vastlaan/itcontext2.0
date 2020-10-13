import React from 'react'
import {useIntl} from 'react-intl'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { fonts, respond, Text, Button } from "../styles";

export default function () {

  const intl = useIntl()

  return (
    <Container>
      <Link to='/offerte-aanvragen'>
      <CustomButton>
        {intl.formatMessage({
            id: "landing.offerte",
            defaultMessage: "Vraag direct offerte aan",
        })}
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


  &:hover{
    color: ${p=>p.theme.warm};
  }

  
`