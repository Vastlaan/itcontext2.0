import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

export default function Back() {
    return <Container>Back</Container>;
}

const Container = styled.div`
    margin: 0;
    padding: 2rem;
    grid-area: back;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.greyDark};
`;
