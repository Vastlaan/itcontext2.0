import styled from "styled-components";
import { fonts } from "./fonts";

export const Button = styled.button`
    margin: 1rem auto;
    padding: 1rem 3rem;
    font-size: 2rem;
    font-family: ${fonts.advent};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    border: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};

    &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.primary};
    }
    &:active,
    :focus {
        outline: none;
    }
`;

export const Social = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    a {
        &:not(:last-child) {
            margin-right: 2rem;
        }

        text-decoration: none;
        color: ${(props) => props.theme.greyLight};
        font-size: 4rem;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const BlockInfo = styled.p`
    grid-area: info;
    font-family: ${fonts.advent};
    font-size: 2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.grey};
    border-left: 5px solid ${(props) => props.theme.fresh};
    padding: 0rem 1rem;
    margin: 0 1rem;
`;
export const BlockHeader = styled.h2`
    grid-area: head;

    text-align: center;
    font-size: 3.5rem;
    font-family: ${fonts.gayathri};
    color: ${(props) => props.theme.grey};
    text-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
`;
export const BlockText = styled.p`
    grid-area: text;
    font-size: 2rem;
    font-family: ${fonts.cormoran};
    text-align: center;
    padding: 1rem;
    letter-spacing: 0.2rem;
`;
export const BlockImage = styled.div`
    position: relative;
    grid-area: img;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.9s;
    }

    &:hover {
        img {
            transform: scale(1.2);
        }
    }
`;

export const BlockButton = styled(Button)`
    align-self: center;
    grid-area: btn;
`;

export const Anchor = styled.a`
    width: 30rem;
    text-decoration: none;
    padding: 1rem 3rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    background-color: ${(props) => props.color};
    border-radius: 3px;
    transition: all 0.3s;

    &:hover {
        background-color: transparent;
        border: 1px solid ${(props) => props.color};

        svg {
            color: ${(props) => props.color};
        }
        span {
            color: ${(props) => props.color};
        }
    }
    svg {
        margin-right: 2rem;
        align-self: center;
        font-size: 4rem;
        color: snow;
    }
    span {
        color: snow;
        font-size: 3rem;
        font-family: ${fonts.advent};
    }
`;

export const PageNav = styled.div`
    padding: 2rem;
    p,
    a {
        font-family: ${fonts.advent};
        text-decoration: none;
        font-weight: 400;
        color: ${(props) => props.theme.primary};
        font-size: 2rem;
    }
`;
