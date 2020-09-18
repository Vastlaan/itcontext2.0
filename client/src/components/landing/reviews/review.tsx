import React from "react";
import styled from "styled-components";
import { fonts } from "../../../styles";

import { RiStarSFill } from "react-icons/ri";

interface ReviewProps {
    image: string;
    title: string;
    date: string;
    stars: number[];
    text: string;
}

export default function Review(props: ReviewProps) {
    const { image, title, date, stars, text } = props;

    return (
        <Container>
            <Image>
                <img src={image} alt="face of customer" />
            </Image>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Stars>
                {stars.map((s, i) => (
                    <RiStarSFill key={`${s}-${i}`} />
                ))}
            </Stars>
            <Text>{text}</Text>
        </Container>
    );
}

const Container = styled.div`
    padding: 1rem;
    margin: 2rem auto;
    background-color: ${(props) => props.theme.bg};
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "img title title date"
        "img stars stars ."
        "img text text text"
        ". text text text";
`;
const Image = styled.div`
    grid-area: img;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
const Title = styled.h6`
    grid-area: title;
    font-family: ${fonts.advent};
    font-size: 2.5rem;
    color: ${(props) => props.theme.primary};
`;
const Date = styled.p`
    text-align: right;
    grid-area: date;
    font-family: ${fonts.advent};
    font-size: 2rem;
    color: ${(props) => props.theme.grey};
`;
const Stars = styled.div`
    grid-area: stars;
    display: flex;
    align-items: center;

    svg {
        font-size: 1.8rem;
        color: ${(props) => props.theme.primary};
        margin: 0.5rem;
    }
`;
const Text = styled.p`
    grid-area: text;
    font-family: ${fonts.advent};
    font-size: 2rem;
    color: ${(props) => props.theme.greyDark};
`;
