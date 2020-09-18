import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IntlShape } from "react-intl";
import { fonts, respond } from "../../styles";

interface MenuProps {
    intl: IntlShape;
}

export default function Menu(props: MenuProps) {
    const { intl } = props;

    return (
        <Container>
            <Link to="/website-otwerpen">
                {intl.formatMessage({
                    id: "navigation.menu-1",
                    defaultMessage: "Web Design",
                })}
            </Link>
            <Link to="/online-marketing">
                {intl.formatMessage({
                    id: "navigation.menu-2",
                    defaultMessage: "Online marketing",
                })}
            </Link>
        </Container>
    );
}
const Container = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex: 1;
    background-color: ${(props) => props.theme.bg};

    ${() => respond("l", "display: none;")}

    a {
        text-decoration: none;
        flex: 1;
        padding: 0.5rem;
        display: none;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.grey};
        font-family: ${fonts.advent};
        font-size: 2.4rem;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;
        text-transform: uppercase;

        &:hover {
            background-color: ${(props) => props.theme.greyLight};
        }
        ${() => respond("s", "display: flex;")}
    }
`;
