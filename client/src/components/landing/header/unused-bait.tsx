import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Social, Anchor, Text, respond } from "../../../styles";
import { BsInfoCircle } from "react-icons/bs";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Bait() {
    const intl = useIntl();

    return (
        <Container>
            <Head>
                <Icon>
                    <BsInfoCircle />
                </Icon>
                <h3>
                    {intl.formatMessage({
                        id: "landing.header-info-1",
                        defaultMessage: "tot je dienst",
                    })}
                </h3>
            </Head>
            <Actions>
                <CustomText>
                    {intl.formatMessage({
                        id: "landing.header-info-2",
                        defaultMessage:
                            "Wij werken van maandag t / m vrijdag tussen 9.00 en 17.00 uur. Wij zijn gevestigd in Purmerend, maar werken in heel Nederland. Heb je vragen? Onze klantenservice staat voor je klaar.",
                    })}
                </CustomText>
                <CustomAnchor color="#117864" href="tel:0299705072">
                    <RiPhoneLine />
                    <span>0299 70 50 72</span>
                </CustomAnchor>
                <CustomAnchor color="#006A93" href="mailto:info@itcontext.nl">
                    <RiMailLine />
                    <span>info@itcontext.nl</span>
                </CustomAnchor>
                
                <Social>
                    <Text>
                        {intl.formatMessage({
                            id: "landing.header-info-3",
                            defaultMessage: "Volg ons",
                        })}
                    </Text>
                    <a href="https://facebook.com">
                        <FaFacebook color="darkblue" />
                    </a>
                    <a href="https://linkedin.com/company/it-context">
                        <FaLinkedin color="skyblue" />
                    </a>
                </Social>
            </Actions>
        </Container>
    );
}

const Container = styled.div`
    grid-area: bait;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(246,249,255,.4);
`;
const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h3 {
        transform: translateX(-4rem);
        flex: 1;
        text-align: center;
        text-transform: uppercase;
        font-family: ${fonts.advent};
        color: ${(props) => props.theme.primary};
        font-size: 3rem;
    }
`;
const Icon = styled.div`
    width: 8rem;
    height: 8rem;
    border-right: 1px solid ${(props) => props.theme.greyLight};
    border-bottom: 1px solid ${(props) => props.theme.greyLight};
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 5rem;
        color: ${(props) => props.theme.grey};
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;

    p {
        width: 100%;
        text-align: center;
    }
`;

const CustomText = styled(Text)`

    ${()=>respond('xxl','margin: 4rem auto;')}
`

const CustomAnchor = styled(Anchor)`
    ${()=>respond('xxl','margin: 2rem auto;')}
`
