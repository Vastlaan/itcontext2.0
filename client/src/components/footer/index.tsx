import React from "react";
import styled from "styled-components";
import Copyright from "./copyright";
import Header from "./header";
import Main from "./main";

export default function Footer() {
    return (
        <Container>
            <Header />
            <Main />
            <Copyright />
        </Container>
    );
}

const Container = styled.footer`
    padding: 2rem 2rem 0rem 2rem;
    background-color: ${(props) => props.theme.primary};
    color: snow;
`;
