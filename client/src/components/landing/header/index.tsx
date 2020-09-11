import React from "react";
import styled from "styled-components";
// components
import Info from "./info";
import Bait from "./bait";
// styles
import { fonts, respond } from "../../../styles";

export default function Header() {
    return (
        <Container>
            <Info />
            <Bait />
        </Container>
    );
}
const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-areas:
        "info"
        "bait";
    overflow-x: hidden;

    ${() =>
        respond(
            "l",
            `grid-template-areas: 
        "info info info info info bait";`
        )};
`;
