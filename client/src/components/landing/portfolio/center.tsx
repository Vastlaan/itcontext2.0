import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, respond, Button } from "../../../styles";
import BackgroundCenterImage from "../../../img/image-portfolio-center.jpg";
import BackgroundEye from "../../../img/image-portfolio-eye.jpg";

export default function Center() {
    return (
        <Container>
            <SmallText>
                <p>Lorem ipsum dolor</p>
                <p>sit amet.</p>
            </SmallText>
            <Eye>
                <Link to="/over-ons">PORT</Link>
                <Link to="/over-ons">FOLIO</Link>
            </Eye>
            <SmallTextTurned>
                <p>Lorem ipsum dolor</p>
                <p>sit amet.</p>
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
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
            to right,
            rgba(17, 120, 100, 0.4),
            rgba(17, 120, 100, 0.4)
        ),
        url(${BackgroundCenterImage});
    background-size: cover;
    background-position: center;
    z-index: 1;
`;
const SmallText = styled.div`
    font-size: 1.5rem;
    font-family: ${fonts.advent};
    color: snow;
    text-align: right;
`;
const SmallTextTurned = styled.div`
    width: 100%;
    font-size: 1.5rem;
    font-family: ${fonts.advent};
    color: snow;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    transform-origin: left center;
    transform: rotate(-90deg);
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
    }
`;
