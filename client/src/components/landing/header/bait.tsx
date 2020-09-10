import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../../styles";
import { BsInfoCircle } from "react-icons/bs";
import Image1 from "../../../img/resdessmall.jpg";

export default function Bait() {
    return (
        <Container>
            <Head>
                <Icon>
                    <BsInfoCircle />
                </Icon>
                <h3>at your service</h3>
            </Head>
            <Block>
                <BlockContent>
                    <BlockHeader>Responsive Websites</BlockHeader>
                    <BlockText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Qui corrupti vero maiores perferendis reiciendis
                        nihil?
                    </BlockText>
                    <BlockImage>
                        <img src={Image1} alt="responsive design website" />
                    </BlockImage>
                    <BlockButton>Contact us</BlockButton>
                </BlockContent>
                <BlockContent>
                    <BlockHeader>Responsive Websites</BlockHeader>
                    <BlockText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Qui corrupti vero maiores perferendis reiciendis
                        nihil?
                    </BlockText>
                    <BlockImage>
                        <img src={Image1} alt="responsive design website" />
                    </BlockImage>
                    <BlockButton>Contact us</BlockButton>
                </BlockContent>
            </Block>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme.bg};
`;
const Head = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h3 {
        flex: 1;
        text-align: center;
        text-transform: uppercase;
        font-family: ${fonts.advent};
        color: ${(props) => props.theme.primary};
        font-size: 3rem;
    }
`;
const Icon = styled.div`
    width: 10rem;
    height: 10rem;
    border-right: 1px solid ${(props) => props.theme.greyLight};
    border-bottom: 1px solid ${(props) => props.theme.greyLight};
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 5rem;
        color: ${(props) => props.theme.grey};
    }
`;

const Block = styled.div`
    margin: 2rem 0;
`;
const BlockContent = styled.div`
    padding: 1rem 0rem 1rem 2rem;
    display: grid;
    grid-template-areas:
        "head head head head head head"
        "text text text img img img"
        "btn btn btn btn btn btn";
`;
const BlockHeader = styled.h3`
    grid-area: head;

    text-align: center;
    font-size: 2.5rem;
    font-family: ${fonts.gayathri};
`;
const BlockText = styled.p`
    grid-area: text;
    font-size: 2rem;
    font-family: ${fonts.cormoran};
`;
const BlockImage = styled.div`
    grid-area: img;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BlockButton = styled.button`
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
