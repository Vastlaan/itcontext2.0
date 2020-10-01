import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { fonts } from "../../styles";

export default function Error() {
    ReactGA.pageview("/not-found");

    return (
        <Container>
            <h1>Error: 404</h1>
            <h1>Page not Found</h1>
            <h1>:-/</h1>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem auto;
    padding: 2rem;

    h1 {
        font-size: 5rem;
        font-family: ${fonts.gayathri};
        color: ${(props) => props.theme.primary};
    }
`;
