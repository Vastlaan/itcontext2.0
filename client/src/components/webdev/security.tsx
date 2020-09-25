import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import {
    respond,
    fonts,
    BlockInfo,
    BlockHeader,
    BlockText,
    BlockImage,
    BlockButton,
} from "../../styles";
import Image2 from "../../img/image-story-2.jpg";

export default function Responsive() {
    const intl = useIntl();

    return (
        <Container>
            <BlockContent>
                <BlockInfo>
                    {intl.formatMessage({
                        id: "webdev.security-info",
                        defaultMessage: "Servers beveiliging",
                    })}
                </BlockInfo>
                <BlockHeader>
                    {intl.formatMessage({
                        id: "webdev.security-header",
                        defaultMessage: "Hoe beschermen wij onze websites",
                    })}
                </BlockHeader>
                <BlockText>
                    {intl.formatMessage({
                        id: "webdev.security-text",
                        defaultMessage:
                            "Onze servers draaien op een van de meste beveiligd omgeving en volgens de strenge veiligheid regels. Wij zorgen ook voor encrypted communicatie tussen onze servers en bezoekers van uw website. Daarvoor dwingen we gebruik van SSL protocols, zodat belangrijke wachtworden of personlijke gegevens kunnen niet lekken.",
                    })}
                </BlockText>

                <BlockImage>
                    <img src={Image2} alt="securely design website" />
                </BlockImage>

                <BlockButton>
                    <Link to="/contact">
                        {intl.formatMessage({
                            id: "webdev.security-btn",
                            defaultMessage: "Bestel uw veilige website",
                        })}
                    </Link>
                </BlockButton>
            </BlockContent>
        </Container>
    );
}
const Container = styled.section`
    margin: 5rem 0rem;
    ${() => respond("m", "margin:10rem auto;")}
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
        "btn btn btn btn btn btn";
    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "info info info info info info"
        "head head head head head head"
        "img img img text text text"
        "img img img btn btn btn";
        padding: 2rem 5rem;`
        )}
`;
