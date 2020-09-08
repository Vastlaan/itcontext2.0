import React from "react";
import styled from "styled-components";

export default function Logo() {
    return <Container>IT Context</Container>;
}
const Container = styled.div`
    font-size: 3rem;
    letter-spacing: 0.2rem;
    font-weight: 400;
    font-family: sans-serif;
    padding: 1rem 2rem;
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.bg};
    border-right: 1px solid ${(props) => props.theme.bg};
`;
