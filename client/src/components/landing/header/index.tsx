import React from "react";
import styled from "styled-components";
// components
import Info from "./info";
import Bait from "./bait";
// styles
import { respond } from "../../../styles";
import Image from '../../../img/header-landing.jpg'

export default function Header() {
    return (
        <Container>
            <Info />
            <Bait />
        </Container>
    );
}
const Container = styled.header`
    width: 100%;
    display: grid;
    grid-template-areas:
        "info"
        "bait";
    overflow-x: hidden;
    background-image: linear-gradient(to right, rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${Image});
    background-size: cover;
    background-repeat: no-repreat;
    background-position: center;

    ${() =>
        respond(
            "l",
            `grid-template-areas: 
        "info info info info info bait";`
        )};
     ${() =>
        respond(
            "xxl",
            `grid-template-areas: 
        "info info info info info bait";`
        )};
    
`;
