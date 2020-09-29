import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../../styles";

export default function Chart() {
    const scrollToArticle = (id: string) => {
        const article = document.querySelector(`#${id}`);
        if (article) {
            article.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Container>
            <Title>IT Context marketing strategieën</Title>
            <AxisX>
                <div>marketing strategieën</div>
            </AxisX>
            <ContentMarketing
                onClick={() => scrollToArticle("content-marketing")}
            >
                Content Marketing
            </ContentMarketing>
            <EmailMarketing onClick={() => scrollToArticle("email-marketing")}>
                Email Marketing
            </EmailMarketing>
            <SearchEngineOptimisatie
                onClick={() => scrollToArticle("seo-marketing")}
            >
                SEO (Organic)
            </SearchEngineOptimisatie>
            <SearchEnginesMarketing
                onClick={() => scrollToArticle("sem-marketing")}
            >
                SEM
            </SearchEnginesMarketing>
            <DisplayAdvertaising
                onClick={() => scrollToArticle("display-marketing")}
            >
                Display Advertaising
            </DisplayAdvertaising>
            <SocialMediaMarketing
                onClick={() => scrollToArticle("social-marketing")}
            >
                Social Media Marketing
            </SocialMediaMarketing>
            <AxisY>effectiviteit bij het werven van klanten</AxisY>
        </Container>
    );
}
const Container = styled.div`
    flex: 0 0 50%;
    background-color: ${(p) => p.theme.bg};
    display: grid;
    grid-template-columns: 5rem repeat(11, 1fr);
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
    padding: 1rem;
    transform: translateY(-4rem);
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
        width: 20rem;
        text-align: center;
        transform: rotate(-90deg) translate(-70%, -8rem);
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
const SingleChart = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    text-align: center;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
    color: snow;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.05);
    }
    &:focus,
    :active {
        outline: none;
    }
`;
const ContentMarketing = styled(SingleChart)`
    grid-area: content;
    background-color: ${(p) => p.theme.fresh};
`;
const SearchEngineOptimisatie = styled(SingleChart)`
    grid-area: seo;
    background-color: ${(p) => p.theme.warm};
`;

const EmailMarketing = styled(SingleChart)`
    grid-area: email;
    background-color: ${(p) => p.theme.secondary};
`;

const SearchEnginesMarketing = styled(SingleChart)`
    grid-area: sem;
    background-color: ${(p) => p.theme.primaryLight};
`;

const DisplayAdvertaising = styled(SingleChart)`
    grid-area: display;
    background-color: ${(p) => p.theme.grey};
`;

const SocialMediaMarketing = styled(SingleChart)`
    grid-area: social;
    background-color: ${(p) => p.theme.primary};
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
