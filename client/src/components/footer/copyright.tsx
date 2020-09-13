import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiHeart2Fill } from "react-icons/ri";
import { fonts } from "../../styles";

export default function Copyright() {
    return (
        <Container>
            <Year>&copy; {new Date().getFullYear()} All rights reserved.</Year>
            <Credits>
                <p>Designed with</p>
                <RiHeart2Fill />
                <p>
                    by <Link to="/">IT Context</Link>
                </p>
            </Credits>
        </Container>
    );
}

const Container = styled.div`
    padding: 1rem 2rem;
    border-top: 1px solid ${(props) => props.theme.grey};
    color: snow;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Year = styled.p`
    font-size: 2rem;
    font-family: ${fonts.advent};
`;
const Credits = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 2rem;
        font-family: ${fonts.advent};

        a {
            text-decoration: none;
            color: snow;
        }
    }
    svg {
        font-size: 2rem;
        color: ${(props) => props.theme.warm};
        margin: 0 1rem;
    }
`;
