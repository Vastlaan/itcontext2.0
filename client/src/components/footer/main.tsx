import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { fonts, Social, respond } from "../../styles";

export default function Main() {
    const intl = useIntl();

    return (
        <Container>
            <ListGroup>
                <List>
                    <h3>
                        {intl.formatMessage({
                            id: "footer.services-header",
                            defaultMessage: "Diensten",
                        })}
                    </h3>
                    <Link to="/website-ontwerpen">
                        {intl.formatMessage({
                            id: "footer.services-1",
                            defaultMessage: "Websites Ontwerpen",
                        })}
                    </Link>
                    <Link to="/website-ontwerpen">
                        {intl.formatMessage({
                            id: "footer.services-2",
                            defaultMessage: "Websites laten maken",
                        })}
                    </Link>
                    <Link to="/online-marketing">
                        {intl.formatMessage({
                            id: "footer.services-3",
                            defaultMessage: "Online Marketing",
                        })}
                    </Link>
                    <Link to="/online-marketing">
                        {intl.formatMessage({
                            id: "footer.services-4",
                            defaultMessage: "SEO Optimalizatie",
                        })}
                    </Link>
                </List>
                <List>
                    <h3>
                        {intl.formatMessage({
                            id: "footer.information-header",
                            defaultMessage: "Informatie",
                        })}
                    </h3>
                    <Link to="/over-ons">
                        {intl.formatMessage({
                            id: "footer.information-1",
                            defaultMessage: "Over Ons",
                        })}
                    </Link>
                    <Link to="/contact">
                        {intl.formatMessage({
                            id: "footer.information-2",
                            defaultMessage: "Contact",
                        })}
                    </Link>
                    <Link to="/cookies">
                        {intl.formatMessage({
                            id: "footer.information-3",
                            defaultMessage: "Cookies",
                        })}
                    </Link>
                    <Link to="/algemene-voorwaarden">
                        {intl.formatMessage({
                            id: "footer.information-4",
                            defaultMessage: "Algemene Voorwaarden",
                        })}
                    </Link>
                </List>
            </ListGroup>

            <SocialMedia>
                <h3>
                    {intl.formatMessage({
                        id: "footer.social-header",
                        defaultMessage: "Volg Ons op Social Media",
                    })}
                </h3>
                <p>
                    {intl.formatMessage({
                        id: "footer.social-text",
                        defaultMessage:
                            "Duik in ons bedrijf, leer ons beter kennen. Wees op te hoogte van onze aanbiediengen en maak een kennis met onze nieuweste prestaties. Wij zijn jong bedrijf, maar we hebben grote ambities.",
                    })}
                </p>
                <Social style={{ justifyContent: "flex-start" }}>
                    <a href="https://facebook.com">
                        <FaFacebook />
                    </a>
                    <a href="https://facebook.com">
                        <FaLinkedin />
                    </a>
                </Social>
            </SocialMedia>
        </Container>
    );
}
const Container = styled.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;

    ${() =>
        respond(
            "s",
            "justify-content: space-between; flex-direction: row;padding: 2rem;"
        )}
`;
const ListGroup = styled.div`
    display: flex;
    justify-content: flex-start;

    ${() => respond("m", "justify-content: space-between;")}
`;
const List = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-right: 3rem;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 600;
        color: snow;
        font-family: ${fonts.advent};
    }

    a {
        text-decoration: none;
        font-size: 2rem;
        color: ${(props) => props.theme.greyLight};
        font-family: ${fonts.advent};
        transition: all 0.3s;

        &:hover {
            color: snow;
        }
    }
`;
const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 2rem auto;
    ${() => respond("s", " max-width: 38%; margin: 0;")}
    ${() => respond("m", " max-width: 50%;")}

    h3 {
        font-size: 2.5rem;
        font-weight: 600;
        color: snow;
        font-family: ${fonts.advent};
    }

    p {
        font-size: 2rem;
        font-family: ${fonts.cormoran};
        color: ${(props) => props.theme.greyLight};
    }
`;
