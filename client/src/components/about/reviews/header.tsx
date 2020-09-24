import React from "react";
import styled from "styled-components";
import { fonts } from "../../../styles";

export default function Header() {
    return (
        <Container>
            <h3>Customers Rating</h3>
            <Line></Line>
            <p>
                We listen to our customers and always try to improve based on
                their feedback.
            </p>
            <p>Listen to what they say about us.</p>
        </Container>
    );
}
const Container = styled.div`
    h3 {
        font-family: ${fonts.advent};
        font-weight: 500;
        font-size: 4rem;
        color: ${(props) => props.theme.grey};
        text-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
    }
    p {
        max-width: 50%;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }
`;
const Line = styled.div`
    margin: 1rem 0;
    width: 50%;
    height: 0.1px;
    background-color: ${(props) => props.theme.greyLight};
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
`;
