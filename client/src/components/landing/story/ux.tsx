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
import { RiHeart2Fill } from "react-icons/ri";

export default function Ux() {
    return (
        <BlockContentReverse>
            <BlockInfoReversed style={{ textAlign: "right" }}>
                Intuitive navigation
            </BlockInfoReversed>
            <BlockHeader>User friendly experience</BlockHeader>
            <BlockText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti consequatur provident dolor ea saepe voluptatibus at,
                tenetur officia quae fuga.
            </BlockText>
            <BlockImage>
                <Icon>
                    <RiHeart2Fill />
                </Icon>

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
            "img img img info info info"
        " img img img head head head"
        "img img img text text text "
        "img img img btn btn btn ";`
        )}
`;
const BlockInfoReversed = styled(BlockInfo)`
    border-left: none;
    border-right: 5px solid ${(props) => props.theme.fresh};
    text-align: right;
`;
const Icon = styled.div`
    padding: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    svg {
        font-size: 4rem;
        color: ${(props) => props.theme.warm};
    }
`;
