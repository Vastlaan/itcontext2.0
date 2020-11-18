import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from "styled-components";
import Front from "./front";
import Back from "./back";
import Center from "./center";
import { respond } from "../../../styles";

export default function Protfolio() {

    const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0, y: 100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])
    return (
        <Container ref={content}>
            <Front />
            <Back />
            <Center />
        </Container>
    );
}

const Container = styled.section`
    position: relative;
    margin: 10rem 0;
    background-image: linear-gradient(to right, ${(props) => props.theme.bg} 98%,${(props) => props.theme.bg} 98%);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "front front"
        "back back";

    ${() =>
        respond(
            "m",
            'grid-template-columns: 1fr 1fr; grid-template-areas: "front back";'
        )}
    ${(p)=>respond('xxl',`padding: 0 5rem; background-image: linear-gradient(to right, #f6f9ff 80%, ${p.theme.primary} 80%);`)}
`;
