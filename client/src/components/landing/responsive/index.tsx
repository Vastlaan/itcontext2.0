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
} from "../../../styles";
import Image2 from "../../../img/image-story-2.jpg";
import Signature from "../../../img/signature.png";

export default function Responsive() {
    const intl = useIntl();

    return (
        <Container>
            <BlockContent>
                <BlockInfo>
                    {intl.formatMessage({
                        id: "landing.responsive-info",
                        defaultMessage: "Responsive Websites",
                    })}
                </BlockInfo>
                <BlockHeader>
                    {intl.formatMessage({
                        id: "landing.responsive-header",
                        defaultMessage:
                            "Oogstrelende websites voor elk apparaat",
                    })}
                </BlockHeader>
                <BlockText>
                    {intl.formatMessage({
                        id: "landing.responsive-text",
                        defaultMessage:
                            "Onze technologie zorgt ervoor dat je website vanaf verschillende apparaten toegankelijk is, snel laadt en je bedrijf hoger scoort in de resultaten van zoekmachines",
                    })}
                </BlockText>
                <Sign>
                    <img src={Signature} alt="signature" />
                    <p>
                        {intl.formatMessage({
                            id: "landing.responsive-sign",
                            defaultMessage:
                                "Michal Antczak - fullstack developer",
                        })}
                    </p>
                </Sign>
                <BlockImage>
                    <img src={Image2} alt="responsive design website" />
                </BlockImage>

                <Link
                    to="/contact"
                    style={{
                        gridArea: "btn",
                        alignSelf: "center",
                        display: "flex",
                        textDecoration: "none",
                    }}
                >
                    <BlockButton>
                        {intl.formatMessage({
                            id: "landing.responsive-btn",
                            defaultMessage: "Bestel uw professionele website",
                        })}
                    </BlockButton>
                </Link>
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
        "sign sign sign sign sign sign"
        "btn btn btn btn btn btn";
    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "info info info info info info"
        "head head head text text text"
        "img img img text text text"
        "img img img sign sign sign"
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
        "img img . sign sign sign"
        "btn btn btn btn btn btn";
        padding: 2rem 10rem;`
        )}
`;

const Sign = styled.div`
    grid-area: sign;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
    }
    p {
        font-family: ${fonts.advent};
        font-size: 1.4rem;
        color: ${(props) => props.theme.grey};
    }
`;
