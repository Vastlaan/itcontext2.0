import React from "react";
import styled from "styled-components";
import {
    respond,
    BlockInfo,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
} from "../../../styles";
import Image2 from "../../../img/image-story-2.jpg";
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
                <BlockImage>
                    <Icon>
                        <FaHubspot />
                    </Icon>

                    <img src={Image2} alt="responsive design website" />
                </BlockImage>
                <BlockButton>Our Work</BlockButton>
            </BlockContent>
        </Container>
    );
}
const Container = styled.section`
    margin: 5rem 0rem;
    ${() => respond("m", "margin:2rem;")}
`;
const BlockContent = styled.div`
    margin-bottom: 10rem;

    display: grid;
    grid-row-gap: 2rem;
    grid-template-areas:
        "info info info info info info"
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "btn btn btn btn btn btn";

    ${() =>
        respond(
            "s",
            `grid-template-areas:
            "info info info img img img"
        "head head head img img img"
        "text text text img img img"
        "btn btn btn img img img";
        padding: 2rem 0rem;`
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
