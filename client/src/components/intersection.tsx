import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../styles";

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
        </Container>
    );
}

const Container = styled.div`
    margin: 20rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Headline = styled.p`
    font-family: ${fonts.cormoran};
    color: ${(props) => props.theme.primary};
    font-size: 2rem;
    text-align: center;
`;
const Main = styled.p`
    font-family: ${fonts.advent};
    color: ${(props) => props.theme.secondary};
    font-size: 3rem;
    width: 90%;
    text-align: center;

    ${() => respond("m", "width: 50%;")}
`;
