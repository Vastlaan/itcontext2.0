import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { fonts, Anchor } from "../../styles";

export default function Details() {
    const intl = useIntl();

    return (
        <Container id="klantenservice">
            <h1>
                {intl.formatMessage({
                    id: "contactDetailsHeaderMain",
                    defaultMessage: "Klantenservice",
                })}
            </h1>
            <h3>
                {intl.formatMessage({
                    id: "contactDetailsHeaderSub1",
                    defaultMessage: "IK BEN JE GRAAG VAN DIENST",
                })}
            </h3>
            <p>
                {intl.formatMessage({
                    id: "contactDetailsHeaderSub2",
                    defaultMessage:
                        "Heb je een vraag voor mij? Neem gerust contact met mij op via de onderstaande contactgegevens.",
                })}
            </p>
            <Anchor color="#117864" href="tel:0682307051">
                <FiPhoneCall />
                <span>06 82 30 70 51</span>
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
    p {
        margin: 1rem auto;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }
`;
