import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

export default function Front() {
    return (
        <Container>
            <Header>Portfolio</Header>
            <Image></Image>
            <Text>
                <p>We</p>
                <p>look at Things</p>
                <p>from different Perspective</p>
            </Text>
        </Container>
    );
}

const Container = styled.div`
    margin: 5rem 0;
    padding: 2rem;
    grid-area: front;
    display: flex;
    flex-direction: column;
    z-index: 5;
    pointer-events: none;
`;
const Header = styled.h1`
    font-family: ${fonts.gayathri};
    font-size: 6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    text-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.fresh};
`;
const Text = styled.div`
    margin: 4rem 0;
    font-family: ${fonts.gayathri};
    font-size: 3rem;
    color: ${(props) => props.theme.greyLight};
`;
const Image = styled.div`
    align-self: flex-end;
    height: 30rem;
    ${() => respond("s", "height: 10rem;")}
`;
