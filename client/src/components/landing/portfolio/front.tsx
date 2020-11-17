import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

export default function Front() {
    const intl = useIntl();

    return (
        <Container>
            <Header>
                {intl.formatMessage({
                    id: "landing.portfolio-header",
                    defaultMessage: "Concept",
                })}
            </Header>
            <Image></Image>
            <Text>
                <p>We</p>
                <p>look at Things</p>
                <p>from different Perspective</p>
            </Text>
        </Container>
    );
}

const Container = styled.div`
    margin: 5rem 0;
    padding: 2rem;
    grid-area: front;
    display: flex;
    flex-direction: column;
    z-index: 5;
    pointer-events: none;
`;
const Header = styled.h1`
    font-family: ${fonts.exo};
    font-size: 4.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: ${(props) => props.theme.primary};

    ${() => respond("s", "font-size: 6rem;")}
`;
const Text = styled.div`
    margin: 4rem 0;
    font-family: ${fonts.gayathri};
    font-size: 3rem;
    color: ${(props) => props.theme.grey};
`;
const Image = styled.div`
    align-self: flex-end;
    height: 30rem;
    ${() => respond("s", "height: 10rem;")}
`;
