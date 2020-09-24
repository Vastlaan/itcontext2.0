import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { respond, fonts } from "../../styles";

interface MobileMenuProps {
    displayMobileMenu: boolean;
}
interface ContainerProps {
    show: boolean;
}

export default function MobileDropDownMenu(props: MobileMenuProps) {
    const { displayMobileMenu } = props;

    return (
        <Container show={displayMobileMenu}>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/website-ontwerpen">Website Ontwerpen</Link>
                <Link to="/online-marketing">Online Marketing</Link>
                <Link to="/over-ons">Over Ons</Link>
                <Link to="contact">Contact</Link>
            </ul>
        </Container>
    );
}

const Container = styled.div<ContainerProps>`
    visibility: ${(p) => (p.show ? `visible` : `hidden`)};
    width: ${(p) => (p.show ? `100%` : `0rem`)};
    padding: 5rem 10rem 5rem 5rem;
    display: block;
    background-color: ${(p) => p.theme.primary};
    position: absolute;
    bottom: -30rem;
    right: 0;
    z-index: 9;
    transition: all 0.3s;
    transition-timing-function: ease-out;
    overflow: hidden;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
            font-size: 2.5rem;
            font-family: ${fonts.advent};
            color: snow;
        }
    }
`;
