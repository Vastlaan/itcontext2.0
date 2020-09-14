import React from "react";
import styled from "styled-components";
import { respond } from "../../../styles";
import Responsive from "./responsive";
import Ux from "./ux";

export default function Story() {
    return (
        <Container>
            <Responsive />
            <Ux />
        </Container>
    );
}

const Container = styled.section`
    padding: 5rem 0rem;
    ${() => respond("m", "padding:2rem;")}
`;
