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
                            "We analyseren wat er in het hoofd van je klanten gebeurd. Daarom is ons ontwerp erop gericht om je publiek te laten groeien met mogelijk veel nieuwe klanten.",
                    })}
                </BlockText>
                <List>
                
                    <div>
                        
                        <p>
                            {intl.formatMessage({
                                id: "landing.ux-check1",
                                defaultMessage: "Betrek je gebruikers",
                            })}
                        </p>
                        
                    </div>
                    <div>
                        
                        <p>
                            {intl.formatMessage({
                                id: "landing.ux-check2",
                                defaultMessage:
                                    "Intentionaal design met de nadruk op actie ondernemen",
                            })}
                        </p>
                        
                    </div>
                    <div>
                        
                        <p>
                            {intl.formatMessage({
                                id: "landing.ux-check3",
                                defaultMessage:
                                    "Consistent en begrijpelijk ontwerp",
                            })} 
                        </p>
                    </div>
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


    div{
        display: grid;
        grid-template-columns:1fr;
        align-content: center;

        p {         
            font-size: 2.2rem;
            font-family: ${fonts.cormoran};
            letter-spacing: 0.15rem;
            text-align: center;
        }

    }

    
`;
