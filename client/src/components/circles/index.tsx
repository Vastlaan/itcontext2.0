import React from 'react'
import styled from 'styled-components'

export default function Ci() {
  return (
    <Circles>
      
    </Circles>
  )
}
const Circles = styled.div`
    position: absolute;
    bottom: 40%;
    right: 40%;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 1px solid ${p=>p.theme.primary};
    opacity: .3;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        top: -20%;
        left: -20%;

        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 2px solid ${p=>p.theme.primary};
        opacity: .4;
    }
`;