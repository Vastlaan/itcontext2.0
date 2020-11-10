import React from "react";
import styled from "styled-components";
import { fonts, respond, Text } from "../styles";

interface ParagraphProps {
    id?: string;
    heading?: string;
    para1?: string;
    para2?: string;
    para3?: string;
}

export default function Paragraph(props: ParagraphProps) {
    const { id, heading, para1, para2, para3 } = props;

    return (
        <Container id={id}>
            <Heading>{heading}</Heading>
            <Text style={{ gridArea: "para1", letterSpacing: ".1rem" }}>
                {para1}
            </Text>
            <Text style={{ gridArea: "para2", letterSpacing: ".1rem" }}>
                {para2}
            </Text>
            <Text style={{ gridArea: "para3", letterSpacing: ".1rem" }}>
                {para3}
            </Text>
        </Container>
    );
}

const Container = styled.article`
    scroll-margin-top: 6rem;
    margin: 10rem auto;
    padding: 2rem;
    position: relative;
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-areas:
        "head "
        "para1 "
        "para2 "
        "para3";
    ${() =>
        respond(
            "m",
            `width: 90%; grid-template-columns: 1fr 1fr; 
            grid-template-areas: 
            "head head"
            "para1 para3" 
            "para2 para3" `
        )}
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 20rem;
        height: 3px;
        background-color: ${(p) => p.theme.primaryLight};
        margin: 0 auto;
        transform: translateX(-50%);

        ${()=>respond('m','left: 2rem; transform: translateX(0%);')}
    }
`;
const Heading = styled.h1`
    font-family: ${fonts.exo};
    font-weight: 800;
    font-size: 3rem;
    color: ${(p) => p.theme.primaryLight};
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;

    ${()=>respond('m','margin: 0; text-align: left;')}

`;
