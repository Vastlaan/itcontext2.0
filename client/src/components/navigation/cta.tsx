import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";
import { RiMenu3Line } from "react-icons/ri";
import NLFlag from "../../img/flag.svg";
import ENFlag from "../../img/uk.svg";

interface CtaProps {
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    setDisplayMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Cta(props: CtaProps) {
    const { setLanguage, setDisplayMobileMenu } = props;

    return (
        <Container>
            <Flag onClick={() => setLanguage("nl")}>
                <img src={NLFlag} alt="nederlandse flag" />
            </Flag>
            <Flag onClick={() => setLanguage("en")}>
                <img src={ENFlag} alt="nederlandse flag" />
            </Flag>
            <Button
                onClick={() => setDisplayMobileMenu((prevState) => !prevState)}
            >
                <RiMenu3Line />
            </Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
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
    ${() => respond("l", "display: block;")}

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

const Flag = styled.button`
    width: 3.5rem;
    margin: 0rem 1rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    &:focus,
    active {
        outline: none;
    }

    img {
        width: 100%;
    }
`;
