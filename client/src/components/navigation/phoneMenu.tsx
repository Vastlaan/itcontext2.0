import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";

export default function Menu() {
    return (
        <Container>
            <li>Web Design</li>
            <li>Online marketing</li>
        </Container>
    );
}
const Container = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex: 1;
    background-color: ${(props) => props.theme.bg};

    ${() => respond("l", "display: none;")}

    li {
        flex: 1;
        padding: 0.5rem;
        display: none;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.grey};
        font-family: ${fonts.advent};
        font-size: 2.4rem;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;
        text-transform: uppercase;

        &:hover {
            background-color: ${(props) => props.theme.greyLight};
        }
        ${() => respond("s", "display: flex;")}
    }
`;
