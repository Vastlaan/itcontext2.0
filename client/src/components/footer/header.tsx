import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";

export default function Header() {
    return (
        <Container>
            <h1>IT Context</h1>
        </Container>
    );
}
const Container = styled.div`
    color: snow;

    ${() => respond("s", "padding: 0rem 2rem;")}

    h1 {
        font-size: 4rem;
        font-family: ${fonts.advent};
        letter-spacing: 0.2rem;
        font-weight: 700;
        padding: 1rem;
        color: snow;
        cursor: pointer;
        line-height: 1;
    }
`;
