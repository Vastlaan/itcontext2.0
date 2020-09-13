import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";
import { RiMenu3Line } from "react-icons/ri";
import NLFlag from "../../img/flag.svg";
import ENFlag from "../../img/uk.svg";

export default function Cta() {
    return (
        <Container>
            <Flag>
                <img src={NLFlag} alt="nederlandse flag" />
            </Flag>
            <Flag>
                <img src={ENFlag} alt="nederlandse flag" />
            </Flag>
            <Button>
                <RiMenu3Line />
            </Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.button`
    align-self: stretch;
    border: none;
    margin: 0;
    padding: 0.5rem 2rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
    transition: all 0.3s;
    cursor: pointer;
    display: block;
    ${() => respond("l", "display: none;")}

    &:hover {
        background-color: ${(props) => props.theme.primaryLight};
    }
    &:focus,
    active {
        outline: none;
    }

    svg {
        margin-left: 1rem;
        font-size: 3rem;
    }
`;

const Flag = styled.div`
    width: 3.5rem;
    margin: 0rem 1rem;

    img {
        width: 100%;
    }
`;
