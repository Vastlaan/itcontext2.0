import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Social, Anchor } from "../../../styles";
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
                        defaultMessage: "tot uw dienst",
                    })}
                </h3>
            </Head>
            <Actions>
                <p>
                    {intl.formatMessage({
                        id: "landing.header-info-2",
                        defaultMessage: "tot uw dienst",
                    })}
                </p>
                <Anchor color="#117864" href="tel:0031682307051">
                    <RiPhoneLine />
                    <span>06 82 30 70 51</span>
                </Anchor>
                <Anchor color="#006A93" href="mailto:info@itcontext.nl">
                    <RiMailLine />
                    <span>info@itcontext.nl</span>
                </Anchor>
                <p>
                    {intl.formatMessage({
                        id: "landing.header-info-3",
                        defaultMessage: "Volg ons",
                    })}
                </p>
                <Social>
                    <a href="https://facebook.com">
                        <FaFacebook color="darkblue" />
                    </a>
                    <a href="https://facebook.com">
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

    background-color: ${(props) => props.theme.bg};
`;
const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h3 {
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
        font-size: 2rem;
        font-family: ${fonts.cormoran};
    }
`;
