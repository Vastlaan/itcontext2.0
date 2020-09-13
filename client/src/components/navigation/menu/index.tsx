import React from "react";
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
            <li>
                {intl.formatMessage({
                    id: "navigation.menu-1",
                    defaultMessage: "Web Design",
                })}
            </li>
            <li>
                {intl.formatMessage({
                    id: "navigation.menu-2",
                    defaultMessage: "SEO Optimalisation",
                })}
            </li>
            <li>
                {intl.formatMessage({
                    id: "navigation.menu-1",
                    defaultMessage: "Online marketing",
                })}
            </li>
        </Container>
    );
}
const Container = styled.ul`
    list-style: none;
    display: none;
    justify-content: space-evenly;
    flex: 1;
    ${() => respond("l", "display: flex;")}

    li {
        flex: 1;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.bg};
        font-family: ${fonts.advent};
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;

        &:hover {
            background-color: ${(props) => props.theme.grey};
        }
    }
`;
