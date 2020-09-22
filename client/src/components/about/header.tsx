import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, Text, respond } from "../../styles";
import ImageLong from "../../img/image-about-seed.png";

export default function Header() {
    return (
        <Container>
            <Head>
                <h1>
                    Everything begins from one person <br />
                    &nbsp; &nbsp; &nbsp; &nbsp;single idea or important desicion
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;that
                    makes the significant change{" "}
                </h1>
            </Head>
            <Info>
                <h3>We belive in your idea</h3>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, est officia deserunt amet quibusdam quod.
                </Text>
            </Info>
            <Short>
                <img src={ImageLong} alt="business online laten groeien" />
            </Short>
            <Long>
                <img src={ImageLong} alt="business online laten groeien" />
            </Long>
        </Container>
    );
}

const Container = styled.header`
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "head head head head long long"
        "head head head head long long"
        "info info short short long long"
        "info info short short long long";
    grid-gap: 2rem;
`;
const Head = styled.div`
    grid-area: head;

    h1 {
        font-family: ${fonts.advent};
        font-size: 4rem;
        color: ${(p) => p.theme.primaryLight};
        font-weight: 700;
    }
`;
const Long = styled.div`
    grid-area: long;

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;

const Short = styled.div`
    grid-area: short;

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;
const Info = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 2.5rem;
        font-family: ${fonts.gayathri};
        color: ${(p) => p.theme.primary};
    }
`;
