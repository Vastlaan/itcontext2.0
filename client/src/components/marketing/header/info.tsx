import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, Text, respond } from "../../../styles";
import { FaChartPie, FaArrowRight } from "react-icons/fa";

export default function Info() {
    const intl = useIntl();

    return (
        <Container>
            <BackgroundIcon>
                <FaChartPie />
            </BackgroundIcon>
            <Head>
                {intl.formatMessage({
                    id: "marketing.header-head-1",
                    defaultMessage:
                        "Het maken van een plan is cruciaal om de voortgang te kunnen meten,",
                })}
                <br />
                {intl.formatMessage({
                    id: "marketing.header-head-2",
                    defaultMessage:
                        "Het goede plan is flexibel en gericht op het behalen van realistische doelen.",
                })}
            </Head>
            <CustomText>
                {intl.formatMessage({
                    id: "marketing.header-text",
                    defaultMessage:
                        "Een goede marketingstrategie vereist een solide plan, dat kan verschillen afhankelijk van: scope - het verkeer waarop u zich concentreert; technologieën - tools die u gaat gebruiken; budget - de tijd en kosten die u bereid bent te besteden. IT Context helpt u bij het kiezen van de beste oplossingen die aan uw eisen voldoen.",
                })}
            </CustomText>
            <CustomButton>
                {intl.formatMessage({
                    id: "marketing.header-btn",
                    defaultMessage: "Click op strategie om verder te lezen",
                })}
                <FaArrowRight />
            </CustomButton>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    position: relative;
    margin-bottom: 8rem;
`;
const Head = styled.h1`
    width: 100%;
    font-family: ${fonts.advent};
    font-size: 3rem;
    color: ${(p) => p.theme.primaryLight};
    font-weight: 700;
    text-align: center;

    ${() => respond("s", `font-size:3rem;`)}
`;
const CustomText = styled(Text)`
    text-align: center;
    margin: 2rem auto;
`;
const CustomButton = styled(Button)`
    background-color: transparent;
    color: ${(p) => p.theme.primary};
    display: flex;
    align-items: center;

    svg {
        margin-left: 1rem;
        transform: rotate(90deg);

        ${() => respond("l", " transform: rotate(0deg);")}
    }
`;
const BackgroundIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
        color: ${(p) => p.theme.bg};
        font-size: 35rem;
        z-index: -1;
    }
`;
