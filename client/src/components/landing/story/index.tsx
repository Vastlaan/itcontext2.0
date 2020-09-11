import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";
import Image1 from "../../../img/image-story-1.jpg";
import Image2 from "../../../img/image-story-2.jpg";

export default function Story() {
    return (
        <Container>
            <Block>
                <BlockContent>
                    <BlockHeader>Responsive Websites</BlockHeader>
                    <BlockText>
                        In the era of mobile world your users might want to
                        reach you in different places, using various devices.
                        That's why we design our websites where every diameter
                        has its right place. So that everyone and everywhere can
                        enjoy your content.
                    </BlockText>
                    <BlockImage>
                        <img src={Image2} alt="responsive design website" />
                    </BlockImage>
                    <BlockButton>Our Work</BlockButton>
                </BlockContent>
                <BlockContentReverse>
                    <BlockHeader>User friendly experience</BlockHeader>
                    <BlockText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corrupti consequatur provident dolor ea saepe
                        voluptatibus at, tenetur officia quae fuga.
                    </BlockText>
                    <BlockImage>
                        <img src={Image1} alt="great user experience" />
                    </BlockImage>
                    <BlockButton>Contact us</BlockButton>
                </BlockContentReverse>
            </Block>
        </Container>
    );
}

const Container = styled.section`
    padding: 5rem 0rem;
    ${() => respond("m", "padding:2rem;")}
`;
const Block = styled.div`
    margin: 1rem 0;
`;
const BlockContent = styled.div`
    padding: 2rem 0rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-areas:
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "btn btn btn btn btn btn";

    ${() =>
        respond(
            "m",
            `grid-template-areas:
        "head head head img img img"
        "text text text img img img"
        "btn btn btn img img img";`
        )}
`;
const BlockContentReverse = styled.div`
    padding: 2rem 0rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-areas:
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "btn btn btn btn btn btn";

    ${() =>
        respond(
            "m",
            `grid-template-areas:
        " img img img head head head"
        "img img img text text text "
        "img img img btn btn btn ";`
        )}
`;
const BlockHeader = styled.h2`
    grid-area: head;

    text-align: center;
    font-size: 3rem;
    font-family: ${fonts.gayathri};
    color: ${(props) => props.theme.grey};
    text-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
`;
const BlockText = styled.p`
    grid-area: text;
    font-size: 2rem;
    font-family: ${fonts.cormoran};
    text-align: center;
    padding: 0rem 2rem;
`;
const BlockImage = styled.div`
    grid-area: img;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.9s;
    }

    &:hover {
        img {
            transform: scale(1.2);
        }
    }
`;

const BlockButton = styled.button`
    align-self: center;
    grid-area: btn;
    margin: 1rem auto;
    padding: 1rem 3rem;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};

    font-size: 2rem;
    font-family: ${fonts.advent};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.primary};
    }
    &::active,
    ::focus {
        outline: none;
    }
`;
