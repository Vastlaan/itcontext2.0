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
    bottom: 10%;
    right: 30%;
    width: 60rem;
    height: 60rem;
    border-radius: 50%;
    border: 1px solid ${p=>p.theme.grey};
    opacity: .2;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        top: -20%;
        left: -20%;

        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        border: 2px solid ${p=>p.theme.grey};
        opacity: .3;
    }
`;