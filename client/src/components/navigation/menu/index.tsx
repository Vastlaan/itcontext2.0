import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

export default function Menu() {
    return (
        <Container>
            <li>Web Design</li>
            <li>SEO Optimalisation</li>
            <li>Online marketing</li>
        </Container>
    );
}
const Container = styled.ul`
    list-style: none;
    display: none;
    justify-content: space-evenly;
    flex: 1;
    ${() => respond("l", "display: flex;")}

    li {
        flex: 1;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.bg};
        font-family: ${fonts.advent};
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;

        &:hover {
            background-color: ${(props) => props.theme.grey};
        }
    }
`;
