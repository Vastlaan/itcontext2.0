import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../styles";
import Curve from "../img/curve.svg";

interface IntersectionProps {
    headline: string;
    text: string;
}
export default function Intersection(props: IntersectionProps) {
    const { headline, text } = props;

    return (
        <Container>
            <Headline>{headline}</Headline>
            <Main>{text}</Main>
            <Image>
                <img src={Curve} alt="curve decoration line" />
            </Image>
        </Container>
    );
}

const Container = styled.div`
    margin: 20rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const Headline = styled.p`
    font-family: ${fonts.cormoran};
    color: ${(props) => props.theme.grey};
    font-size: 2rem;
    text-align: center;
`;
const Main = styled.p`
    font-family: ${fonts.advent};
    color: ${(props) => props.theme.primaryLight};
    font-size: 3.5rem;
    font-weight: 600;
    width: 90%;
    text-align: center;

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
