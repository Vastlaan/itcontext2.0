import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";
import BackgroundImage from "../../../img/header-background.svg";

export default function Header() {
    return (
        <Container>
            <Info>
                <h1>Design inspired by beauty</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos deleniti maiores voluptatibus neque officia quam harum
                    labore saepe veniam! Voluptatem eligendi accusamus, nisi
                    porro aliquam corrupti dolorem odio doloremque. Illo,
                    quisquam quos incidunt adipisci ducimus a dignissimos.
                    Asperiores, sequi assumenda?
                </p>
            </Info>
            <BackgroundImageContainer>
                <div></div>
            </BackgroundImageContainer>
        </Container>
    );
}
const Container = styled.section`
    padding: 5rem 2rem;
    width: 100%;
    min-height: 80rem;
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: hidden;

    ${() => respond("m", "grid-template-columns: repeat(2, 1fr);")}
`;
const Info = styled.div`
    h1 {
        font-family: ${fonts.gayathri};
        font-size: 5rem;
        text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
        color: ${(props) => props.theme.grey};
    }
    p {
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.greyDark};
    }
`;

const BackgroundImageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 50rem;
        height: 50rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        z-index: 5;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-150%, 0%);
            width: 30rem;
            height: 30rem;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
`;
