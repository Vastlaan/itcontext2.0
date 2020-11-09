import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { fonts } from "../../../styles";

export default function Header() {
    const intl = useIntl();

    return (
        <Container>
            <h3>
                {intl.formatMessage({
                    id: "about.reviews-header-1",
                    defaultMessage: "Klantenwaardering",
                })}
            </h3>
            <Line></Line>
            <p>
                {intl.formatMessage({
                    id: "about.reviews-header-2",
                    defaultMessage:
                        "We verbeteren ons werk op basis van feedback van de klanten.",
                })}
            </p>
            <p>
                {intl.formatMessage({
                    id: "about.reviews-header-3",
                    defaultMessage: "Luister naar wat ze over ons zeggen.",
                })}
            </p>
        </Container>
    );
}
const Container = styled.div`
    h3 {
        font-family: ${fonts.exo};
        font-weight: 800;
        font-size: 4rem;
        color: ${(props) => props.theme.grey};
        text-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
    }
    p {
        max-width: 80%;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
        
    }
    margin-bottom: 4.7rem;
`;
const Line = styled.div`
    margin: 1rem 0;
    width: 50%;
    height: 0.1px;
    background-color: ${(props) => props.theme.greyLight};
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
`;
