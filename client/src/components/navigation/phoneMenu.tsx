import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, respond } from "../../styles";

export default function Menu() {
    return (
        <Container>
            <Link to="/website-otwerpen">Web Design</Link>
            <Link to="/online-marketing">E-commerce</Link>
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

    a {
        text-decoration: none;
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
