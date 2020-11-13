import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Image from '../../../img/header-marketing.jpg'
import { respond, fonts, Button, Text} from "../../../styles";

export default function Header() {

    const intl = useIntl()

    function scrollDown() {
        return window.scrollTo({
            top: 550,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <Container>
            <Head>
                    {intl.formatMessage({
                        id: "marketing.header-header-1",
                        defaultMessage: "Professionele Websites",
                    })}
                </Head>
                <Head>
                    {intl.formatMessage({
                        id: "marketing.header-header-2",
                        defaultMessage: "op maat gemaakt",
                    })}
                </Head>
                <CustomText>
                    {intl.formatMessage({
                        id: "marketing.header-text",
                        defaultMessage:
                            "Een goede marketingstrategie vereist een solide plan, dat kan verschillen afhankelijk van: scope - het verkeer waarop je je concentreert; technologieën - tools die je gaat gebruiken; budget - de tijd en kosten die je bereid bent te besteden. IT Context helpt je bij het kiezen van de beste oplossingen die aan jouw wensen en eisen voldoen.",
                    })}
                </CustomText>
                <CustomButton onClick={scrollDown}>
                    {intl.formatMessage({
                        id: "marketing.header-btn-m",
                        defaultMessage: "Lees meer",
                    })}
                </CustomButton>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    min-height: 50rem;
    margin: 0rem auto;
    padding: 4.7rem 2.2rem;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, rgba(255,255,255,1) 50%,rgba(255,255,255,.1)), url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    ${() => respond("l", "min-height: 60rem; padding: 4.7rem;")}
    ${() => respond("xxl", "min-height: 60rem; padding: 10rem 4.7rem;")}
`;

const Head = styled.h1`
    color: ${(p)=>p.theme.primary};
    font-size: 6rem;
    font-weight: 800;
    font-family: ${fonts.exo};
    letter-spacing: -.1rem;
    line-height: 1;

    ${()=>respond('xxl','font-size: 6rem;')}
`;
const CustomText = styled(Text)`
    max-width: 60rem;
    text-align: left;
    margin: 3rem 0;
    color: ${(p)=>p.theme.grey};
`;
const CustomButton = styled(Button)`
    align-self: flex-start;
    margin: 5rem 0;
   
`;
