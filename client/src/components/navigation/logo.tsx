import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";

export default function Logo() {
    return <Container>IT Context</Container>;
}
const Container = styled.h1`
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    font-family: ${fonts.advent};
    letter-spacing: 0.2rem;
    font-weight: 700;
    padding: 1rem 1rem;
    color: ${(props) => props.theme.primaryLight};
    background-color: ${(props) => props.theme.bg};
    cursor: pointer;

    ${respond("s", "padding: 1rem 2rem;")}
`;
