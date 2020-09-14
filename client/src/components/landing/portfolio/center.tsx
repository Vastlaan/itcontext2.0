import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, respond } from "../../../styles";

import BackgroundEye from "../../../img/image-portfolio-eye.jpg";

export default function Center() {
    return (
        <Container>
            <SmallText>
                <p>Creative solution</p>
            </SmallText>
            <Eye>
                <Link to="/over-ons">PORT</Link>
                <Link to="/over-ons">FOLIO</Link>
            </Eye>
            <SmallTextTurned>
                <p>Custom design</p>
            </SmallTextTurned>
        </Container>
    );
}

const Container = styled.div`
    width: 35rem;
    height: 35rem;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    z-index: 1;
    ${() => respond("s", "transform: translate(-50%, -50%);")};
`;
const SmallText = styled.div`
    font-size: 1.5rem;
    font-family: ${fonts.advent};
    letter-spacing: 0.3rem;
    color: ${(props) => props.theme.fresh};
    text-align: right;
`;
const SmallTextTurned = styled.div`
    width: 100%;
    font-size: 1.5rem;
    font-family: ${fonts.advent};
    letter-spacing: 0.3rem;
    color: snow;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    transform-origin: left center;
    transform: rotate(-90deg) translateX(25%);
`;
const Eye = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
        ),
        url(${BackgroundEye});
    background-size: cover;
    background-position: center;
    z-index: 10;

    a {
        font-family: ${fonts.advent};
        font-size: 6rem;
        font-weight: 700;
        color: snow;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: ${(props) => props.theme.greyLight};
        }
    }
`;
