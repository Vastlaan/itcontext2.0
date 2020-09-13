import React from "react";
import styled from "styled-components";
import Front from "./front";
import Back from "./back";
import Center from "./center";
import { fonts, respond } from "../../../styles";

export default function Protfolio() {
    return (
        <Container>
            <Front />
            <Back />
            <Center />
        </Container>
    );
}

const Container = styled.section`
    position: relative;

    background-color: ${(props) => props.theme.grey};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "front front"
        "back back";

    ${() =>
        respond(
            "m",
            'grid-template-columns: 1fr 1fr; grid-template-areas: "front back";'
        )}
`;
