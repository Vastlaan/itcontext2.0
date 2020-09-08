import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";
import { RiMenu3Line } from "react-icons/ri";

export default function Cta() {
    return (
        <Button>
            <h2>Contact</h2>
            <RiMenu3Line />
        </Button>
    );
}
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0.5rem 2rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.primaryLight};
    }
    &:focus,
    active {
        outline: none;
    }

    h2 {
        font-family: ${fonts.advent};
        font-weight: 300;
        font-size: 2.5rem;
        display: none;
        ${() => respond("l", "display: block;")}
    }
    svg {
        margin-left: 1rem;
        font-size: 3rem;
    }
`;
