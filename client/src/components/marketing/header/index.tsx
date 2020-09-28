import React from "react";
import styled from "styled-components";
import { respond, PageNav } from "../../../styles";
import Info from "./info";
import Chart from "./chart";

export default function Header() {
    return (
        <Container>
            <Info />
            <Chart />
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    padding: 0rem;
    display: flex;
    flex-direction: column;

    ${() => respond("l", "flex-direction: row; padding: 0rem 2rem 2rem 2rem;")}
`;
