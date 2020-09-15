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

export default function Responsive() {
    return (
        <BlockContent>
            <BlockInfo>Responsive Websites</BlockInfo>
            <BlockHeader>Websites for every device</BlockHeader>
            <BlockText>
                In the era of mobile world your users might want to reach you in
                different places, using various devices. That's why we design
                our websites where every diameter has its right place. So that
                everyone and everywhere can enjoy your content.
            </BlockText>
            <BlockImage>
                <img src={Image2} alt="responsive design website" />
            </BlockImage>
            <BlockButton>Our Work</BlockButton>
        </BlockContent>
    );
}
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
            "info info info info info info"
        "head head head img img img"
        "text text text img img img"
        "btn btn btn img img img";
        padding: 2rem 0rem;`
        )}
`;
