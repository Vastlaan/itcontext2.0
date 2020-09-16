import React from "react";
import styled from "styled-components";
import { fonts } from "../../../styles";
import { ImStarFull, ImStarHalf } from "react-icons/im";

export default function Reviews() {
    return (
        <Container>
            <Header>
                <h3>Customers Rating</h3>
                <Line></Line>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit atque laudantium consequuntur adipisci, commodi
                    veritatis quas exercitationem quisquam quidem hic eligendi
                    qui, accusantium vitae ipsam? Natus ad quasi voluptatem
                    fugiat!
                </p>
            </Header>
        </Container>
    );
}

const Container = styled.section`
    margin-bottom: 10rem;
    padding: 2rem;
`;
const Header = styled.div`
    h3 {
        font-family: ${fonts.advent};
        font-weight: 500;
        font-size: 4rem;
        color: ${(props) => props.theme.grey};
        text-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
    }
    p {
        max-width: 50%;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }
`;
const Line = styled.div`
    margin: 1rem 0;
    width: 50%;
    height: 0.1px;
    background-color: ${(props) => props.theme.greyLight};
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.3);
`;
