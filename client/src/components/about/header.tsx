import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, Text, respond, PageNav } from "../../styles";
import ImageLong from "../../img/image-about-side.png";
import ImageShort from "../../img/image-about-short.png";

export default function Header() {
    const intl = useIntl();

    return (
        <Container>
            <Head>
                <h1>Everything begins from one person </h1>
                <br />
                <h1>single idea or important desicion,</h1>
                <br />
                <h1>which makes the significant change</h1>
            </Head>
            <Info>
                <h3>We belive in your idea</h3>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, est officia deserunt amet quibusdam quod.
                </Text>
                <Button>Read more</Button>
            </Info>
            <Short>
                <img src={ImageShort} alt="business online laten groeien" />
            </Short>
            <Long>
                <img src={ImageLong} alt="business online laten groeien" />
            </Long>
            <PageNavGrid>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "webdev.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/over-ons">
                        {intl.formatMessage({
                            id: "webdev.pagenav-current",
                            defaultMessage: "Over Ons",
                        })}
                    </Link>
                </p>
            </PageNavGrid>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "nav nav nav nav nav nav"
        "info info info info info info"
        "info info info info info info"
        "head head head head head head"
        "head head head head head head"
        "short short short short short short"
        "short short short short short short";
    grid-gap: 2rem;

    ${() =>
        respond(
            "m",
            `grid-template-areas:
        "head head head head long long"
        "head head head head long long"
        "info info short short long long"
        "info info short short long long"
        "nav nav nav nav nav nav";`
        )}
`;

const PageNavGrid = styled(PageNav)`
    grid-area: nav;
`;
const Head = styled.div`
    grid-area: head;
    width: 100%;
    padding: 2rem;

    h1 {
        font-family: ${fonts.advent};
        font-size: 2.5rem;
        color: ${(p) => p.theme.primaryLight};
        font-weight: 700;
        text-align: center;

        ${() => respond("s", `font-size: 4rem;`)}
    }
`;
const Long = styled.div`
    display: none;
    grid-area: long;
    overflow: hidden;
    max-height: 90vh;

    ${() => respond("m", `display: block;`)}

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Short = styled.div`
    align-self: center;
    justify-self: center;
    width: 100%;
    grid-area: short;
    overflow: hidden;

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
`;
const Info = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    h3 {
        font-size: 2.5rem;
        font-family: ${fonts.gayathri};
        color: ${(p) => p.theme.primary};
    }

    button {
        margin: 2rem 0;
        align-self: flex-start;
    }
`;
