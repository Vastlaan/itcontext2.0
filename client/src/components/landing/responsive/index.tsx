import React from "react";
import styled from "styled-components";
import {
    respond,
    fonts,
    BlockInfo,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
} from "../../../styles";
import Image2 from "../../../img/image-story-2.jpg";
import Signature from "../../../img/signature.png";
import { FaHubspot } from "react-icons/fa";

export default function Responsive() {
    return (
        <Container>
            <BlockContent>
                <BlockInfo>Responsive Websites</BlockInfo>
                <BlockHeader>Websites for every device</BlockHeader>
                <BlockText>
                    In the era of mobile world your users might want to reach
                    you in different places, using various devices. That's why
                    we design our websites where every diameter has its right
                    place. So that everyone and everywhere can enjoy your
                    content.
                </BlockText>
                <Sign>
                    <img src={Signature} alt="signature" />
                    <p>Michal Antczak - fullstack developer</p>
                </Sign>
                <BlockImage>
                    <img src={Image2} alt="responsive design website" />
                </BlockImage>
                <BlockButton>Our Work</BlockButton>
            </BlockContent>
        </Container>
    );
}
const Container = styled.section`
    margin: 5rem 0rem;
    ${() => respond("m", "margin:10rem auto;")}
`;
const BlockContent = styled.div`
    margin-bottom: 10rem;
    padding: 2rem 0rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "info info info info info info"
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "sign sign sign sign sign sign"
        "btn btn btn btn btn btn";
    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img img text text text"
        "img img img sign sign sign"
        ". . . btn btn btn";
        padding: 2rem 5rem;`
        )}
    ${() =>
        respond(
            "xl",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img . text text text"
        "img img . sign sign sign"
        "btn btn btn btn btn btn";
        padding: 2rem 10rem;`
        )}
`;
const Icon = styled.div`
    padding: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
    svg {
        font-size: 4rem;
        color: ${(props) => props.theme.primary};
    }
`;

const Sign = styled.div`
    grid-area: sign;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
    }
    p {
        font-family: ${fonts.advent};
        font-size: 1.4rem;
        color: ${(props) => props.theme.grey};
    }
`;
