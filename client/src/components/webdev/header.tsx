import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond, Text } from "../../styles";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "../../img/header-marketing.jpg";

export default function Header() {
    function scrollDown() {
        return window.scrollTo({
            top: 550,
            left: 0,
            behavior: "smooth",
        });
    }

    const intl = useIntl();

    return (
        <Container>
            <Main>
                <Head>
                    {intl.formatMessage({
                        id: "webdev.header-header-1",
                        defaultMessage: "Professionele Websites",
                    })}
                </Head>
                <Head>
                    {intl.formatMessage({
                        id: "webdev.header-header-2",
                        defaultMessage: "op maat gemaakt",
                    })}
                </Head>
                <CustomText>
                    {intl.formatMessage({
                        id: "webdev.header-text",
                        defaultMessage:
                            "Ons brede aanbod onderscheidt zich door allerlei oplossingen. Wij realiseren zowel kleine als grote opdrachten, van eenvoudige maar krachtige websites tot complexe webapplicaties, e-mailadressen, Content Managment Systems en veel meer.",
                    })}
                </CustomText>
                <CustomButton onClick={scrollDown}>
                    {intl.formatMessage({
                        id: "webdev.header-btn",
                        defaultMessage: "Lees meer",
                    })}
                </CustomButton>
            </Main>
            <Right>
                <SideButton onClick={scrollDown}>
                    <BsChevronDoubleDown />
                </SideButton>
            </Right>
        </Container>
    );
}
const Container = styled.header`
    min-height: 50rem;
    background-image: linear-gradient(to right, rgba(255,255,255,1) 50%,rgba(255,255,255,.1)), url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${() => respond("l", "min-height: 60rem;")}
    ${() => respond("xxl", "min-height: 60rem;")}

`;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4.7rem 2.2rem;
    background-image: linear-gradient(to right, rgba(255,255,255,1),rgba(255,255,255,1));

    ${() => respond("m", "width: 50%; padding: 4.7rem;")}
    ${() => respond("xxl", " padding: 10rem 4.7rem;")}
`;
const Head = styled.h1`
    color: ${p=>p.theme.primary};
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
    color: ${p=>p.theme.grey};
`;
const CustomButton = styled(Button)`
    align-self: flex-start;
    margin: 5rem 0;
    background-color: ${(props) => props.theme.primary};
    border: 1px solid ${(props) => props.theme.primary};

    &:hover {
        color: ${(props) => props.theme.primary};
    }
`;

const Right = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 50%;

    ${() => respond("m", "display: flex;")}
`;

const SideButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3;

    svg {
        color: ${(props) => props.theme.primary};
        font-size: 5rem;
    }
`;
