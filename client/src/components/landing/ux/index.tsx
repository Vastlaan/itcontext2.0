import React from "react";
import styled from "styled-components";
import {
    respond,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
    BlockInfo,
    fonts,
} from "../../../styles";
import { BsCheckCircle } from "react-icons/bs";
import Image1 from "../../../img/image-story-1.jpg";
import { RiHeart2Fill } from "react-icons/ri";

export default function Ux() {
    return (
        <Container>
            <BlockContent>
                <BlockInfo>Intuitive navigation</BlockInfo>
                <BlockHeader>User friendly experience</BlockHeader>
                <BlockText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti consequatur provident dolor ea saepe voluptatibus
                    at, tenetur officia quae fuga.
                </BlockText>
                <List>
                    <p>
                        <BsCheckCircle /> Lorem ipsum dolor sit.
                    </p>
                    <p>
                        <BsCheckCircle /> Sa sit amet consectetur adipisicing
                        elit.
                    </p>
                    <p>
                        <BsCheckCircle /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </List>
                <BlockImage>
                    <Icon>
                        <RiHeart2Fill />
                    </Icon>
                    <img src={Image1} alt="great user experience" />
                </BlockImage>
                <BlockButton>Contact us</BlockButton>
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
    padding: 2rem 0rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "info info info info info info"
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "list list list list list list"
        "btn btn btn btn btn btn";
    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img img text text text"
        "img img img list list list"
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
        "img img . list list list"
        "btn btn btn btn btn btn";
        padding: 2rem 10rem;`
        )}
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
const List = styled.div`
    grid-area: list;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 1.8rem;
        font-family: ${fonts.cormoran};
        letter-spacing: 0.2rem;

        svg {
            margin-right: 1rem;
            color: ${(props) => props.theme.fresh};
        }
    }
`;
