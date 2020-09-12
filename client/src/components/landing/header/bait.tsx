import React from "react";
import styled from "styled-components";
import { fonts, Social } from "../../../styles";
import { BsInfoCircle } from "react-icons/bs";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Bait() {
    return (
        <Container>
            <Head>
                <Icon>
                    <BsInfoCircle />
                </Icon>
                <h3>at your service</h3>
            </Head>
            <Actions>
                <p>
                    We work during the working days from 9:00 till 17:00
                    o'clock. But you can mail us also during the weekend. Our
                    customer service is for your disposal.
                </p>
                <Anchor color="#117864" href="tel:0031682307051">
                    <RiPhoneLine />
                    <span>06 82 30 70 51</span>
                </Anchor>
                <Anchor color="#006A93" href="mailto:info@itcontext.nl">
                    <RiMailLine />
                    <span>info@itcontext.nl</span>
                </Anchor>
                <p>Follow Us:</p>
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
const Anchor = styled.a`
    width: 30rem;
    text-decoration: none;
    padding: 1rem 3rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    background-color: ${(props) => props.color};
    border-radius: 3px;
    transition: all 0.3s;

    &:hover {
        background-color: transparent;
        border: 1px solid ${(props) => props.color};

        svg {
            color: ${(props) => props.color};
        }
        span {
            color: ${(props) => props.color};
        }
    }
    svg {
        margin-right: 2rem;
        align-self: center;
        font-size: 4rem;
        color: snow;
    }
    span {
        color: snow;
        font-size: 3rem;
        font-family: ${fonts.advent};
    }
`;
