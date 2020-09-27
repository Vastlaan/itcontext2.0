import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../../styles";

export default function Chart() {
    return (
        <Container>
            <Title>IT Context marketing strategieën</Title>
            <AxisX>
                <div>marketing strategieën</div>
            </AxisX>
            <ContentMarketing>Content Marketing</ContentMarketing>
            <EmailMarketing>Email Marketing</EmailMarketing>
            <SearchEngineOptimisatie>SEO (Organic)</SearchEngineOptimisatie>
            <SearchEnginesMarketing>SEM</SearchEnginesMarketing>
            <DisplayAdvertaising>Display Advertaising</DisplayAdvertaising>
            <SocialMediaMarketing>Social Media Marketing</SocialMediaMarketing>
            <AxisY>effectiviteit bij het werven van klanten</AxisY>
        </Container>
    );
}
const Container = styled.div`
    flex: 0 0 50%;
    background-color: ${(p) => p.theme.bg};
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        "title title title title title title title title title title title ."
        "axisX email email email email email email . . . . ."
        "axisX content content content content content content content . . . ."
        "axisX seo seo seo seo seo seo seo . . . ."
        "axisX sem sem sem sem sem sem sem sem . . ."
        "axisX display display display display display display display display display . ."
        "axisX social social social social social social social social social social ."
        ". axisY axisY axisY axisY axisY axisY axisY axisY axisY axisY .";
    border-radius: 3px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
`;
const AxisX = styled.div`
    grid-area: axisX;
    padding: 1rem 1rem 1rem 1rem;
    border-right: 1px solid ${(p) => p.theme.greyLight};

    div {
        font-family: ${fonts.advent};
        font-size: 2rem;
        line-height: 1;
        color: ${(p) => p.theme.greyDark};
        width: 200%;
        text-align: center;
        transform: rotate(-90deg) translate(-100%, -1rem);
        transform-origin: center center;
    }
`;
const AxisY = styled.div`
    border-top: 1px solid ${(p) => p.theme.greyLight};
    grid-area: axisY;
    padding: 1rem 1rem 0 1rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    line-height: 1;
    color: ${(p) => p.theme.greyDark};
`;
const ContentMarketing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: content;
    background-color: ${(p) => p.theme.fresh};
    padding: 0.5rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;
const SearchEngineOptimisatie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: seo;
    background-color: ${(p) => p.theme.warm};
    padding: 0.5rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;

const EmailMarketing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: email;
    background-color: ${(p) => p.theme.secondary};
    padding: 0.5rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;

const SearchEnginesMarketing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: sem;
    background-color: ${(p) => p.theme.primaryLight};
    padding: 0.5rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;

const DisplayAdvertaising = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: display;
    background-color: ${(p) => p.theme.grey};
    padding: 0.5rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;

const SocialMediaMarketing = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    grid-area: social;
    background-color: ${(p) => p.theme.primary};
    padding: 0.2rem;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
`;

const Title = styled.h3`
    grid-area: title;
    padding: 1rem;
    font-family: ${fonts.gayathri};
    font-size: 2.5rem;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    color: ${(p) => p.theme.primary};
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
`;
