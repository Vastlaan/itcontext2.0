import React from "react";
import styled from "styled-components";
import { textChangeRangeNewSpan } from "typescript";
import { fonts, respond, Text, Button } from "../styles";

interface InfoStripProps {
    note: string;
    text: string;
    btn: string;
    icon: JSX.Element;
}

export default function InfoStrip(props: InfoStripProps) {
    const { note, text, btn, icon } = props;

    return (
        <Container>
            <ShortText>{text}</ShortText>
            <Note>
                <ShortButton>{btn}</ShortButton>
                <Text>{note}</Text>
                <Icon>{icon}</Icon>
            </Note>
        </Container>
    );
}

const Container = styled.article`
    margin: 2rem auto;
    padding: 2rem;
    display: flex;
    flex-direction: column-reverse;

    ${() => respond("l", "flex-direction: row;")}
`;
const ShortButton = styled(Button)`
    cursor: default;

    &:hover {
        background-color: ${(p) => p.theme.primary};
        color: snow;
    }
`;
const ShortText = styled(Text)`
    font-size: 2rem;
    padding: 2rem;
`;
const Note = styled.div`
    padding: 2rem;
    flex: 0 0 50%;
    font-size: 2.5rem;
    color: ${(p) => p.theme.primary};
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    ${() => respond("m", "flex-direction: row;")}

    p {
        font-size: 2.5rem;
        flex: 1;
        text-align: center;
        color: ${(p) => p.theme.primary};
    }
`;

const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    border: 1px solid ${(p) => p.theme.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 3rem;
        color: 1px solid ${(p) => p.theme.primary};
    }
`;
