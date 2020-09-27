import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, Text, respond } from "../../../styles";
import { FaChartPie } from "react-icons/fa";

export default function Info() {
    return (
        <Container>
            <BackgroundIcon>
                <FaChartPie />
            </BackgroundIcon>
            <Head>
                Some motherfucking heading
                <br />
                which is a little longer than usually
            </Head>
            <Text style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                saepe numquam architecto doloremque possimus eveniet hic
                accusamus adipisci explicabo natus!
            </Text>
            <Button>Button</Button>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    position: relative;
    margin-bottom: 8rem;
`;
const Head = styled.h1`
    width: 100%;
    font-family: ${fonts.advent};
    font-size: 2.5rem;
    color: ${(p) => p.theme.primaryLight};
    font-weight: 700;
    text-align: center;

    ${() => respond("s", `font-size: 4rem;`)}
`;
const BackgroundIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
        color: ${(p) => p.theme.bg};
        font-size: 35rem;
        z-index: -1;
    }
`;
