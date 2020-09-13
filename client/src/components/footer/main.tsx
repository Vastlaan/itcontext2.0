import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { fonts, Social, respond } from "../../styles";

export default function Main() {
    return (
        <Container>
            <ListGroup>
                <List>
                    <h3>Services</h3>
                    <a href="/website-ontwerpen">Web Design</a>
                    <a href="/website-ontwerpen">Web Development</a>
                    <a href="/online-marketing">Online Marketing</a>
                    <a href="/online-marketing">SEO optimalisation</a>
                </List>
                <List>
                    <h3>Informations</h3>
                    <a href="/contact">Contact Us</a>
                    <a href="/cookies">Cookies</a>
                    <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>
                </List>
            </ListGroup>

            <SocialMedia>
                <h3>Follow us on Social Media</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium aliquam nulla doloremque omnis iste nam soluta
                    odit quidem eius nemo.
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