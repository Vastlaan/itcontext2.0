import React from "react";
import styled from "styled-components";
import {
    respond,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
    BlockInfo,
} from "../../../styles";
import Image1 from "../../../img/image-story-1.jpg";

export default function Ux() {
    return (
        <BlockContentReverse>
            <BlockInfo>Intuitive navigation</BlockInfo>
            <BlockHeader>User friendly experience</BlockHeader>
            <BlockText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti consequatur provident dolor ea saepe voluptatibus at,
                tenetur officia quae fuga.
            </BlockText>
            <BlockImage>
                <img src={Image1} alt="great user experience" />
            </BlockImage>
            <BlockButton>Contact us</BlockButton>
        </BlockContentReverse>
    );
}
const BlockContentReverse = styled.div`
    margin-bottom: 10rem;
    padding: 2rem 0rem;
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
            ". . . info info info"
        " img img img head head head"
        "img img img text text text "
        "img img img btn btn btn ";`
        )}
`;
