import React from "react";
import styled from "styled-components";

export default function Cta() {
    return <Button>Contact</Button>;
}
const Button = styled.button`
    border: none;
    margin: 0;
    padding: 1rem;
    align-self: stretch;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
    font-size: 2rem;
`;
