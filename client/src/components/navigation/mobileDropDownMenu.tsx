import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { respond, fonts } from "../../styles";

interface MobileMenuProps {
    displayMobileMenu: boolean;
    setDisplayMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ContainerProps {
    show: boolean;
}

export default function MobileDropDownMenu(props: MobileMenuProps) {
    const intl = useIntl();
    const { displayMobileMenu, setDisplayMobileMenu } = props;

    return (
        <Container show={displayMobileMenu}>
            <ul>
                <Link to="/" onClick={() => setDisplayMobileMenu(false)}>
                    {intl.formatMessage({
                        id: "navigation.menu-0",
                        defaultMessage: "Voorpagina",
                    })}
                </Link>
                <Link
                    to="/website-ontwerpen"
                    onClick={() => setDisplayMobileMenu(false)}
                >
                    {intl.formatMessage({
                        id: "navigation.menu-1",
                        defaultMessage: "Website Ontwerpen",
                    })}
                </Link>
                <Link
                    to="/online-marketing"
                    onClick={() => setDisplayMobileMenu(false)}
                >
                    {intl.formatMessage({
                        id: "navigation.menu-2",
                        defaultMessage: "Online marketing",
                    })}
                </Link>
                <Link
                    to="/over-ons"
                    onClick={() => setDisplayMobileMenu(false)}
                >
                    {intl.formatMessage({
                        id: "navigation.menu-3",
                        defaultMessage: "Over Ons",
                    })}
                </Link>
                <Link to="/contact" onClick={() => setDisplayMobileMenu(false)}>
                    {intl.formatMessage({
                        id: "navigation.menu-4",
                        defaultMessage: "Contact",
                    })}
                </Link>
            </ul>
        </Container>
    );
}

const Container = styled.div<ContainerProps>`
    visibility: ${(p) => (p.show ? `visible` : `hidden`)};
    width: 100%;
    padding: 5rem 10rem 5rem 5rem;
    display: block;
    background-color: ${(p) => p.theme.primary};
    position: absolute;
    bottom: -30rem;
    right: 0;
    z-index: 9;
    transition: all 0.6s;
    transition-timing-function: ease-out;
    transform: translateX(${(p) => (p.show ? `0%` : `100%`)});
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
            transition: all 0.4s;
        }
    }
`;
