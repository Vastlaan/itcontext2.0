import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import Menu from "./menu";
import Cta from "./cta";

export default function Nav() {
    return (
        <Container>
            <Logo />
            <Menu />
            <Cta />
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    padding: 0rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.greyDark};
    box-shadow: 0 0.2rem 0.3rem ${(props) => props.theme.greyLight};
`;
