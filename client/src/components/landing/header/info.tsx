import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../../styles";
import { RiShieldStarLine } from "react-icons/ri";
import { FaBlackTie, FaRegHandshake } from "react-icons/fa";

export default function Info() {
    const intl = useIntl();

    return (
        <Container>
            <Header>
                {intl.formatMessage({
                    id: "landing.header-main",
                    defaultMessage: "Moderne website & creatief ontwerp",
                })}
            </Header>
            <Circles />
            <Details>
                <Block>
                    <Icon>
                        <FaBlackTie />
                    </Icon>

                    <div>
                        <h3>
                            {intl.formatMessage({
                                id: "landing.header-1-header",
                                defaultMessage:
                                    "Elegante en gestructureerde website",
                            })}
                        </h3>
                        <p>
                            {intl.formatMessage({
                                id: "landing.header-1-text",
                                defaultMessage:
                                    "Wij maken websites die uw bedrijf vertegenwoordigen in de moderne en chique stijl. Maak het intuïtief om te navigeren en gemakkelijk te gebruiken.",
                            })}
                        </p>
                    </div>
                </Block>
                <Block>
                    <Icon>
                        <FaRegHandshake />
                    </Icon>

                    <div>
                        <h3>
                            {intl.formatMessage({
                                id: "landing.header-2-header",
                                defaultMessage:
                                    "Elegante en gestructureerde website",
                            })}
                        </h3>
                        <p>
                            {intl.formatMessage({
                                id: "landing.header-2-text",
                                defaultMessage:
                                    "Elegante en gestructureerde website",
                            })}
                        </p>
                    </div>
                </Block>
                <Block>
                    <Icon>
                        <RiShieldStarLine />
                    </Icon>

                    <div>
                        <h3>
                            {intl.formatMessage({
                                id: "landing.header-3-header",
                                defaultMessage:
                                    "Onderscheid je van de concurrentie",
                            })}
                        </h3>
                        <p>
                            {intl.formatMessage({
                                id: "landing.header-3-text",
                                defaultMessage:
                                    "Elegante en gestructureerde website",
                            })}
                        </p>
                    </div>
                </Block>
            </Details>
        </Container>
    );
}
const Container = styled.div`
    grid-area: info;
    position: relative;
    padding: 5rem 2rem;
`;
const Circles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    z-index: -1;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(50%, 0%);
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;
const Header = styled.h1`
    font-family: ${fonts.gayathri};
    font-size: 5rem;
    text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.grey};
`;
const Details = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
`;

const Block = styled.div`
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    grid-row-gap: 2rem;

    ${() =>
        respond("s", "grid-template-columns: 10rem 1fr;justify-items: center;")}

    div {
        justify-self: start;
        h3 {
            font-family: ${fonts.advent};
            font-size: 2.5rem;
            color: ${(props) => props.theme.primary};
        }
        p {
            font-family: ${fonts.cormoran};
            font-size: 2rem;
            color: ${(props) => props.theme.greyDark};
        }
    }
`;

const Icon = styled.div`
    background-color: ${(props) => props.theme.bg};
    padding: 2rem;
    border-right: 1px solid ${(props) => props.theme.greyLight};
    border-bottom: 1px solid ${(props) => props.theme.greyLight};
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
    svg {
        font-size: 4rem;
        color: ${(props) => props.theme.primaryLight};
    }
`;
