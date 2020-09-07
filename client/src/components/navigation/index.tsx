import React from "react";
import styled from "styled-components";

export default function Nav() {
    return (
        <Container>
            <Logo>IT Context</Logo>
            <Menu>
                <li>Web Design</li>
                <li>SEO Optimalisation</li>
                <li>Online marketing</li>
                <li>Systems Administration</li>
            </Menu>
            <Button>Contact</Button>
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    padding: 0rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.greyDark};
    box-shadow: 0 0.2rem 0.3rem ${(props) => props.theme.greyLight};
`;
const Logo = styled.div`
    font-size: 3rem;
    letter-spacing: 0.2rem;
    font-weight: 400;
    font-family: sans-serif;
    padding: 1rem 2rem;
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.bg};
    border-right: 1px solid ${(props) => props.theme.bg};
`;
const Menu = styled.ul`
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

const Button = styled.button`
    border: none;
    margin: 0;
    padding: 1rem;
    align-self: stretch;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
    font-size: 2rem;
`;
