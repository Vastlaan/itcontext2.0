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
                        id: "webdev.responsive-info",
                        defaultMessage: "Responsive Websites",
                    })}
                </BlockInfo>
                <BlockHeader>
                    {intl.formatMessage({
                        id: "webdev.responsive-header",
                        defaultMessage:
                            "Oogstrelende websites voor elk apparaat",
                    })}
                </BlockHeader>
                <BlockText>
                    {intl.formatMessage({
                        id: "webdev.responsive-text",
                        defaultMessage:
                            "Onze technologie zorgt ervoor dat uw website vanaf verschillende apparaten toegankelijk is, snel laadt en uw bedrijf hoger scoort in de resultaten van zoekmachines",
                    })}
                </BlockText>

                <BlockImage>
                    <img src={Image2} alt="responsive design website" />
                </BlockImage>

                <BlockButton>
                    <Link to="/contact">
                        {intl.formatMessage({
                            id: "webdev.responsive-btn",
                            defaultMessage: "Bestel uw professionele website",
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
