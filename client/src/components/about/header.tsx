import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import InfoStrip from "../infoStrip";
import { fonts, Button, Text, respond, PageNav } from "../../styles";
import ImageShort from "../../img/image-about-short.png";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Header() {
    const intl = useIntl();
    const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0,y:100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content}>
            <Head>
                <h1>
                    {intl.formatMessage({
                        id: "about.header-slogan-1",
                        defaultMessage: "Alles begint bij één persoon",
                    })}{" "}
                </h1>
                <br />
                <h1>
                    {intl.formatMessage({
                        id: "about.header-slogan-2",
                        defaultMessage:
                            "een enkel idee of belangrijke beslissing,",
                    })}
                </h1>
                <br />
                <h1>
                    {intl.formatMessage({
                        id: "about.header-slogan-3",
                        defaultMessage:
                            "die substantiële verandering aanbrengt",
                    })}
                </h1>
            </Head>
            <Info>
                <h3>
                    <HiOutlineLightBulb />
                    {intl.formatMessage({
                        id: "about.header-info-header",
                        defaultMessage: "Wij geloven in uw idee",
                    })}
                </h3>
                
                <Text>
                    {intl.formatMessage({
                        id: "about.header-info-text",
                        defaultMessage:
                            "Het ontwerpen van een goede website is een expeditie waarin u uw klanten wilt laten duiken. Het moet een missie hebben en het moet worden aangedreven door bereiken van het doel. Wij helpen u dit expeditie plannen en uitvoeren.",
                    })}
                </Text>
            </Info>
            <Short>
                <img src={ImageShort} alt="business online laten groeien" />
            </Short>
            <Long>
                <InfoStrip
                    text={intl.formatMessage({
                        id: "about.header-long-text",
                        defaultMessage:
                            "Het is onze taak om zo'n website te ontwerpen die uw bezoekers zal verbazen en in uw loyaal klanten zal veranderen",
                    })}
                    btn={intl.formatMessage({
                        id: "about.header-long-btn",
                        defaultMessage: "Maak winst",
                    })}
                    note={intl.formatMessage({
                        id: "about.header-long-note",
                        defaultMessage: "met IT Context",
                    })}
                    icon={<GiTakeMyMoney />}
                />
            </Long>

            <PageNavGrid>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "about.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/over-ons">
                        {intl.formatMessage({
                            id: "about.pagenav-current",
                            defaultMessage: "Over Ons",
                        })}
                    </Link>
                </p>
            </PageNavGrid>
            <Circles />
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
        "long long long long long long";
    grid-gap: 2rem;
    position: relative;
    overflow-x: hidden;

    ${() =>
        respond(
            "m",
            `grid-template-areas:
            "nav nav nav nav nav nav"
        "head head head head head head"
        ". long long long long ."
        ". info info info info ."
        ;`
        )}
`;

const Circles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    z-index: -1;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(50%, 0%);
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

const PageNavGrid = styled(PageNav)`
    grid-area: nav;
`;
const Head = styled.div`
    grid-area: head;
    width: 100%;
    padding: 2rem;

    h1 {
        font-family: ${fonts.exo};
        font-size: 2.5rem;
        color: ${(p) => p.theme.primaryLight};
        font-weight: 800;
        text-align: center;
        line-height: 1.2;

        ${() => respond("s", `font-size: 4rem;`)}
    }
`;
const Long = styled.div`
    display: block;
    grid-area: long;
    overflow: hidden;

    ${() => respond("m", `display: block;`)}
`;

const Short = styled.div`
    align-self: center;
    justify-self: center;
    width: 100%;
    grid-area: short;
    overflow: hidden;
    display: block;

    ${() => respond("m", `display: none;`)}
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
    background-color: ${(p) => p.theme.bg};

    h3 {
        display: flex;
        align-items: center;
        font-family: ${fonts.exo};
        font-size: 3.3em;
        font-weight: 800;
        text-align: center;
        line-height: 1.2;
        color: ${(p) => p.theme.primaryLight};

        svg {
            font-size: 5rem;
            color: ${(p) => p.theme.primaryLight};
            margin: 2rem 0;
        }


        ${() => respond("m", "text-align: left;")}
    }

    
`;
