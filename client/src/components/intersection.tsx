import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from "styled-components";
import { fonts, respond } from "../styles";
import Curve from "../img/curve.svg";

interface IntersectionProps {
    headline: string;
    text: string;
    background?: boolean;
}
export default function Intersection(props: IntersectionProps) {
    const { background, headline, text } = props;
     const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0, y: 100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content}>
            <Headline>{headline}</Headline>
            <Main>{text}</Main>
            {background ? (
                <Image>
                    <img src={Curve} alt="curve decoration line" />
                </Image>
            ) : null}
        </Container>
    );
}

const Container = styled.article`
    margin: 20rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const Headline = styled.p`
    font-family: ${fonts.cormoran};
    color: ${(props) => props.theme.grey};
    font-size: 2.5rem;
    text-align: center;
`;
const Main = styled.p`
    font-family: ${fonts.exo};
    color: ${(props) => props.theme.primaryLight};
    font-size: 3.5rem;
    font-weight: 800;
    width: 90%;
    text-align: center;
    letter-spacing: 0rem;
    line-height: 1.2;

    ${() => respond("m", "width: 50%;")}
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    overflow-x: hidden;
    z-index: -1;

    img {
        width: 100%;
    }
`;
