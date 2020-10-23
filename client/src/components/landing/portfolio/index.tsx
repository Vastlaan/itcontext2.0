import React from "react";
import styled from "styled-components";
import Front from "./front";
import Back from "./back";
import Center from "./center";
import { respond } from "../../../styles";

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
    margin: 10rem 0;
    background-image: linear-gradient(to right, ${(props) => props.theme.bg} 98%,${(props) => props.theme.bg} 98%);
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
    ${()=>respond('xxl',`padding: 0 5rem; background-image: linear-gradient(to right, #f6f9ff 80%, #c0392b 80%);`)}
`;
