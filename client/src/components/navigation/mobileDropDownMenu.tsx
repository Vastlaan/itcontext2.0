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
                <Link to="/offerte-aanvragen" onClick={() => setDisplayMobileMenu(false)}>
                    {intl.formatMessage({
                        id: "navigation.menu-5",
                        defaultMessage: "Offerte",
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
    width: 100%;
    padding: 5rem 10rem 5rem 5rem;
    display: block;
    background-color: ${(p) => p.theme.primary};
    position: absolute;
    bottom: -45.25rem;
    right: 0;
    z-index: 9;
    transition: all 0.3s;
    transition-timing-function: ease-out;
    transform: translateX(${(p) => (p.show ? `0%` : `100%`)});
    overflow: hidden;
    ${()=>respond('xl','width: 100%; padding: 0rem; bottom: -5rem; ')}
   

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        ${()=>respond('xl','flex-direction: row; justify-content: space-around; ')}

        a {
            margin: 1rem;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 2.5rem;
            font-family: ${fonts.advent};
            color: snow;
            transition: all 0.4s;

            ${()=>respond('xl','font-size: 2rem; text-align: right;')}

            &:hover {
                color: ${(p) => p.theme.greyLight};
            }
        }
    }
`;
