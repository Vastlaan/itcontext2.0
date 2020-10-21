import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { fonts, Anchor, Text } from "../styles";

export default function Details() {
    const intl = useIntl();

    return (
        <Container id="klantenservice">
            <h1>
                {intl.formatMessage({
                    id: "contact.details-header-main",
                    defaultMessage: "Klantenservice",
                })}
            </h1>
            <h3>
                {intl.formatMessage({
                    id: "contact.details-header-sub-1",
                    defaultMessage: "WIJ ZIJN JE GRAAG VAN DIENST",
                })}
            </h3>
            <Text style={{margin: '2rem 0'}}>
                {intl.formatMessage({
                    id: "contact.details-header-sub-2",
                    defaultMessage:
                        "Heb je een vraag voor ons? Neem gerust contact met ons op via de onderstaande contactgegevens.",
                })}
            </Text>
            <Anchor color="#117864" href="tel:0299705072">
                <FiPhoneCall />
                <span>0299 70 50 72</span>
            </Anchor>
            <Anchor color="#006A93" href="mailTo:info@itcontext.nl">
                <FiMail />
                <span>info@itcontext.nl</span>
            </Anchor>
        </Container>
    );
}

const Container = styled.div`
    flex: 0 0 40%;
    padding: 2rem;
    font-family: ${fonts.advent};

    h1 {
        font-size: 2.8rem;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        color: ${(props) => props.theme.grey};
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        text-transform: lowercase;
        color: ${(props) => props.theme.grey};
    }
`;
