import React from "react";
import styled from "styled-components";
import BackgroundCenterImage from "../../../img/image-portfolio-center.jpg";
import { fonts, respond } from "../../../styles";

export default function Back() {
    return (
        <Container>
            <Text>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    iusto incidunt accusantium laudantium unde est iure dicta
                    tempora blanditiis tempore?
                </p>
            </Text>
            <Circles />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    margin: 0;
    padding: 2rem;
    grid-area: back;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: white;
`;
const Text = styled.div`
    max-width: 50%;
    margin-bottom: 10rem;

    p {
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        letter-spacing: 0.3rem;
        color: ${(props) => props.theme.greyDark};
    }
`;
const Circles = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        top: -10%;
        left: -10%;

        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;
