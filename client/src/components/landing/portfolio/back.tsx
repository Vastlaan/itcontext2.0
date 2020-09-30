import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";

export default function Back() {
    const intl = useIntl();

    return (
        <Container>
            <Text>
                <p>
                    {intl.formatMessage({
                        id: "landing.portfolio-text",
                        defaultMessage:
                            "Onze werk is gekenmerkt door de continue ontwikkeling proces. Projecten zijn altijd met gebruik van de nieuweste technologieën, met passie en betrokkenheid uitgevoert",
                    })}
                </p>
            </Text>
            <Circles />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 2rem;
    grid-area: back;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    overflow: hidden;

    ${() => respond("m", "align-items: flex-end;")}
`;
const Text = styled.div`
    max-width: 80%;
    margin-bottom: 2rem;
    margin-top: 10rem;
    ${() => respond("s", "max-width: 50%;")}
    ${() => respond("m", "margin-bottom: 10rem;margin-top: 2rem;")}

    p {
        font-family: ${fonts.cormoran};
        font-size: 2.2rem;
        letter-spacing: 0.3rem;
        color: ${(props) => props.theme.greyDark};
    }
`;
const Circles = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        top: -20%;
        left: -20%;

        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;
