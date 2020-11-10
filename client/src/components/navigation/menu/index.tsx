import React from "react";
import { Link } from "react-router-dom";
import { IntlShape } from "react-intl";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

interface MenuProps {
    intl: IntlShape;
}
export default function Menu(props: MenuProps) {
    const { intl } = props;

    return (
        <Container>
            <Link to="/website-ontwerpen">
                {intl.formatMessage({
                    id: "navigation.menu-1",
                    defaultMessage: "Website Ontwerpen",
                })}
            </Link>

            <Link to="/online-marketing">
                {intl.formatMessage({
                    id: "navigation.menu-2",
                    defaultMessage: "Online marketing",
                })}
            </Link>
            <Link to="/offerte-aanvragen">
                {intl.formatMessage({
                    id: "navigation.menu-5",
                    defaultMessage: "Offerte",
                })}
            </Link>
            
            <Hidden>
                <Link to="/over-ons">
                    {intl.formatMessage({
                        id: "navigation.menu-3",
                        defaultMessage: "Over Ons",
                    })}
                </Link>
            </Hidden>
            <Hidden>
                <Link to="/contact">
                    {intl.formatMessage({
                        id: "navigation.menu-4",
                        defaultMessage: "Contact",
                    })}
                </Link>
            </Hidden>
            <Hidden>
                <Link to="/blog">
                    {intl.formatMessage({
                        id: "navigation.menu-6",
                        defaultMessage: "Blog",
                    })}
                </Link>
            </Hidden>
        </Container>
    );
}
const Container = styled.ul`
    list-style: none;
    display: none;
    justify-content: space-evenly;
    flex: 1;
    ${() => respond("xl", "display: flex;")}

    a, div {
        text-decoration: none;
        flex:1;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.bg};
        font-family: ${fonts.advent};
        font-size: 2.4rem;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;

        &:hover {
            background-color: ${(props) => props.theme.grey};
        }

        ${()=>respond('xxl','flex:auto;')}
    }
`;
const Hidden = styled.div`
    display:none !important;
    ${()=>respond('xxl','display: flex !important; align-items: center;')}
`