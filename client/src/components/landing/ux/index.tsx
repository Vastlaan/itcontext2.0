import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import {
    respond,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
    BlockInfo,
    fonts,
} from "../../../styles";
import { BsCheckCircle } from "react-icons/bs";
import Image1 from "../../../img/image-story-1.jpg";
import { RiHeart2Fill } from "react-icons/ri";

export default function Ux() {
    const intl = useIntl();

    return (
        <Container>
            <BlockContent>
                <BlockInfo>
                    {intl.formatMessage({
                        id: "landing.ux-info",
                        defaultMessage: "Intuïtieve navigatie",
                    })}
                </BlockInfo>
                <BlockHeader>
                    {intl.formatMessage({
                        id: "landing.ux-header",
                        defaultMessage: "Gebruiksvriendelijke ervaring",
                    })}
                </BlockHeader>
                <BlockText>
                    {intl.formatMessage({
                        id: "landing.ux-text",
                        defaultMessage:
                            "We analyseren wat er in het hoofd van uw klant gebeurt. Daarom is ons ontwerp erop gericht om uw publiek te laten groeien met mogelijk veel nieuwe klanten.",
                    })}
                </BlockText>
                <List>
                    <p>
                        <BsCheckCircle />{" "}
                        {intl.formatMessage({
                            id: "landing.ux-check1",
                            defaultMessage: "Uw gebruikers erbij betrokken",
                        })}
                    </p>
                    <p>
                        <BsCheckCircle />{" "}
                        {intl.formatMessage({
                            id: "landing.ux-check2",
                            defaultMessage:
                                "Intentional design met de nadruk op actie ondernemen",
                        })}
                    </p>
                    <p>
                        <BsCheckCircle />{" "}
                        {intl.formatMessage({
                            id: "landing.ux-check3",
                            defaultMessage:
                                "Consistent en begrijpelijk ontwerp",
                        })}
                    </p>
                </List>
                <BlockImage>
                    <Icon>
                        <RiHeart2Fill />
                    </Icon>
                    <img src={Image1} alt="great user experience" />
                </BlockImage>
                <Link
                    to="/online-marketing"
                    style={{
                        gridArea: "btn",
                        alignSelf: "center",
                        display: "flex",
                        textDecoration: "none",
                    }}
                >
                    <BlockButton>
                        {intl.formatMessage({
                            id: "landing.ux-btn",
                            defaultMessage: "Hoe u nieuwe klanten kunt werven",
                        })}
                    </BlockButton>
                </Link>
            </BlockContent>
        </Container>
    );
}
const Container = styled.section`
    margin: 5rem 0rem;
    ${() => respond("m", "margin:2rem;")}
`;
const BlockContent = styled.div`
    margin-bottom: 10rem;
    padding: 2rem 0rem;
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "info info info info info info"
        "head head head head head head"
        "img img img img img img"
        "text text text text text text"
        "list list list list list list"
        "btn btn btn btn btn btn";
    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img img text text text"
        "img img img list list list"
        ". . . btn btn btn";
        padding: 2rem 5rem;`
        )}
    ${() =>
        respond(
            "xl",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img . text text text"
        "img img . list list list"
        "btn btn btn btn btn btn";
        padding: 2rem 10rem;`
        )}
`;
const Icon = styled.div`
    padding: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    svg {
        font-size: 4rem;
        color: ${(props) => props.theme.warm};
    }
`;
const List = styled.div`
    grid-area: list;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 90%;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-family: ${fonts.cormoran};
        letter-spacing: 0.2rem;

        svg {
            min-width: 20px;
            min-height: 20px;
            margin-right: 1rem;
            color: ${(props) => props.theme.fresh};
        }
    }
`;
