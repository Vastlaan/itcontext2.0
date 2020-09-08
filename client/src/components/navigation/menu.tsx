import React from "react";
import styled from "styled-components";

export default function Menu() {
    return (
        <Container>
            <li>Web Design</li>
            <li>SEO Optimalisation</li>
            <li>Online marketing</li>
            <li>Systems Administration</li>
        </Container>
    );
}
const Container = styled.ul`
    align-self: stretch;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;

    li {
        color: ${(props) => props.theme.bg};
        font-size: 2rem;
        font-weight: 300;
        font-family: sans-serif;
    }
`;
