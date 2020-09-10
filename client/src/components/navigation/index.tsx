import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import Menu from "./menu";
import PhoneMenu from "./phoneMenu";
import Cta from "./cta";

export default function Nav() {
    return (
        <Container>
            <Logo />
            <Menu />
            <PhoneMenu />
            <Cta />
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    padding: 0rem;
    display: flex;
    background-color: ${(props) => props.theme.greyDark};
    line-height: 1;
`;
