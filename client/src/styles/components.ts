import styled from "styled-components";
import { fonts } from "./fonts";

export const Button = styled.button`
    margin: 1rem auto;
    padding: 1rem 3rem;
    font-size: 2rem;
    font-family: ${fonts.advent};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    border: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};

    &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.primary};
    }
    &::active,
    ::focus {
        outline: none;
    }
`;
