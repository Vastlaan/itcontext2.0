import React from "react";
import { Link } from "react-router-dom";
import styled, { StyledFunction } from "styled-components";
import { respond, fonts, Text, Button } from "../../../styles";
import { IconType } from "react-icons";

interface CardProps {
    btn: string;
    link: string;
    hovered?: boolean;
    translate?: string;
    image?: string;
    icon?: JSX.Element;
    header?: string;
    text?: string;
}
interface CardStyledProps {
    hovered?: boolean;
    trans?: string;
    image?: string;
}

export default function Card(props: CardProps) {
    const { btn, link, hovered, translate, image, icon, header, text } = props;

    const scrollToSecurity = () => {
        const security = document.querySelector("#security");
        if (security) {
            security.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Container hovered={hovered} trans={translate} image={image}>
            <Icon hovered={hovered}>{icon}</Icon>
            <Header hovered={hovered}>{header}</Header>
            <CardText hovered={hovered}>{text}</CardText>
            <Link
                to={link}
                onClick={scrollToSecurity}
                style={{ textDecoration: "none", margin: "0 auto" }}
            >
                <CardButton>{btn}</CardButton>
            </Link>
        </Container>
    );
}

const Container = styled.div<CardStyledProps>`
    min-height: 40rem;
    width: 35rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    background-image: ${(props) =>
        props.hovered
            ? `linear-gradient(to bottom, rgba(17, 120, 100,.6), rgba(17, 120, 100,1)), url(${props.image})`
            : "linear-gradient(to bottom, rgba(246,249,255,1), rgba(246,249,255,1))"};
    transform: translateY(${(p) => p.trans});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s;

    ${() => respond("m", "width: 25rem;")}
    ${() => respond("m", "width: 30rem;")}

    &:hover {
        background-image: ${(p) => `linear-gradient(
                to bottom,
                rgba(17, 120, 100, 0.6),
                rgba(17, 120, 100, 1)
            ),
            url(${p.image})`};
        div,
        p,
        svg {
            color: ${(props) => (props.hovered ? `snow` : `snow`)};
        }
    }
`;

const Icon = styled.div<CardStyledProps>`
    margin: 0 auto 2rem auto;

    svg {
        font-size: 5rem;
        color: ${(props) => (props.hovered ? `snow` : "#117864")};
        transition: all 0.3s;
    }
`;
const Header = styled.div<CardStyledProps>`
    font-family: ${fonts.gayathri};
    font-size: 2.5rem;
    text-transform: capitalize;
    text-align: center;
    transition: all 0.3s;
    color: ${(props) => (props.hovered ? `snow` : "#0F284E")};
`;
const CardText = styled(Text)<CardStyledProps>`
    color: ${(props) => (props.hovered ? `snow` : "#18191F")};
    font-size: 2rem;
    text-align: center;
    transition: all 0.3s;
`;
const CardButton = styled(Button)`
    padding: 0.5rem 2rem;
    background-color: ${(props) => props.theme.fresh};
    border: 1px solid ${(props) => props.theme.bg};

    &:hover {
        color: ${(props) => props.theme.bg};
    }
`;
