import React from "react";
import styled from "styled-components";
import { fonts, Button } from "../../styles";
import { BsChevronDoubleDown } from "react-icons/bs";
import Image from "../../img/image-webdev-header.png";

export default function Header() {
    return (
        <Container>
            <Main>
                <Head>Professionele Websites</Head>
                <Head>aan uw behoeften</Head>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                    vel aliquam nulla illo quos esse quaerat sed velit nisi,
                    dolore soluta, nemo quidem praesentium magni veniam quo,
                    repellendus repellat cupiditate quibusdam possimus quisquam?
                    Dolor eligendi quas doloremque earum quaerat illo excepturi
                    debitis eum. Sequi, vel illum? Quae, amet tempora?
                </Text>
                <CustomButton>Read more</CustomButton>
            </Main>
            <Right>
                <div>
                    <BsChevronDoubleDown />
                </div>
            </Right>
        </Container>
    );
}
const Container = styled.header`
    padding: 2rem;
    background-image: url(${Image});
    backgroung-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 70vh;
    display: flex;
    align-items: center;
`;

const Main = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
const Head = styled.h1`
    color: snow;
    font-size: 4rem;
    font-family: ${fonts.gayathri};
    letter-spacing: 0.3rem;
`;
const Text = styled.p`
    color: snow;
    font-size: 2rem;
    font-family: ${fonts.cormoran};
    letter-spacing: 0.2rem;
`;
const CustomButton = styled(Button)`
    background-color: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondary};

    &:hover {
        color: ${(props) => props.theme.secondary};
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rem;
        border: 2px solid ${(props) => props.theme.secondary};
        border-radius: 50%;
    }
    svg {
        color: ${(props) => props.theme.secondary};
        font-size: 10rem;
    }
`;
