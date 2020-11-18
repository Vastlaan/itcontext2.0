import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import Img from '../../img/Poster.svg'
import {respond} from '../../styles'

export default function Header() {

   const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0, y:100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

  return (
    <Container ref={content}>
      <img src={Img} alt="website aanbieding"/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
  overflow: hidden;

  img{
    width: 125%;
    object-fit: cover;

    ${()=>respond('l','width: 100%;')}
  }
`
