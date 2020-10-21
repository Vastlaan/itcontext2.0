import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Text } from "../../../styles";
import { RiShieldStarLine } from "react-icons/ri";
import { FaBlackTie, FaRegHandshake } from "react-icons/fa";

export default function Info() {
    const intl = useIntl();

    return (
        <Container>
            <Header>
                {intl.formatMessage({
                    id: "landing.header-main",
                    defaultMessage:
                        "IT Context helpt je bedrijf online te groeien",
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
                        <CustomText>
                            {intl.formatMessage({
                                id: "landing.header-1-text",
                                defaultMessage:
                                    "Wij maken websites die je bedrijf vertegenwoordigen in een moderne en chique stijl. Maak het eenvoudig om te navigeren en gemakkelijk te gebruiken.",
                            })}
                        </CustomText>
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
                                    "Bereik de juiste doelgroep en overtuig hen om contact met je op te nemen",
                            })}
                        </h3>
                        <CustomText>
                            {intl.formatMessage({
                                id: "landing.header-2-text",
                                defaultMessage:
                                    "We zorgen ervoor dat potentiële klanten je gemakkelijk kunnen vinden en bouwen een solide basis op om hen te helpen bij het kiezen van je producten en diensten.",
                            })}
                        </CustomText>
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
                        <CustomText>
                            {intl.formatMessage({
                                id: "landing.header-3-text",
                                defaultMessage:
                                    "We ontwerpen prachtige en unieke websites en helpen je met het creëren van waardevolle inhoud.",
                            })}
                        </CustomText>
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

    ${()=>respond('xxl','padding: 5rem;')}
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
    font-size: 3.5rem;
    text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
    color: ${(props) => props.theme.grey};

    ${()=>respond('xxl','font-size: 5rem;')}
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
    ${()=>respond('xxl','margin-bottom: 5rem;')}

    div {
        justify-self: start;
        h3 {
            font-family: ${fonts.advent};
            font-size: 2.5rem;
            color: ${(props) => props.theme.primary};
            text-align: center;

            ${() => respond("m", "text-align: left;")}
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

const CustomText = styled(Text)`
    ${()=>respond('xxl','max-width:60%;')}
`
