import React from "react";
import styled from "styled-components";
import { fonts, respond, Text } from "../styles";

interface ParagraphProps {
    heading: string;
    para1: string;
    para2: string;
    para3: string;
}

export default function Paragraph(props: ParagraphProps) {
    const { heading, para1, para2, para3 } = props;

    return (
        <Container>
            <Heading>{heading}</Heading>
            <Text style={{ gridArea: "para1" }}>{para1}</Text>
            <Text style={{ gridArea: "para2" }}>{para2}</Text>
            <Text style={{ gridArea: "para3" }}>{para3}</Text>
        </Container>
    );
}

const Container = styled.article`
    margin: 10rem auto;
    padding: 2rem;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

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
        left: 0;
        width: 20rem;
        height: 3px;
        background-color: ${(p) => p.theme.secondary};
    }
`;
const Heading = styled.div`
    font-family: ${fonts.gayathri};
    font-size: 3rem;
    color: ${(p) => p.theme.secondary};
`;
