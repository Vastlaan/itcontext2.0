import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
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
import Image from "../../img/image-security.jpg";

export default function Responsive() {
    const intl = useIntl();
    const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0,y:100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content} id="security">
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
                        defaultMessage: "Hoe beschermen wij onze websites?",
                    })}
                </BlockHeader>
                <BlockText>
                    {intl.formatMessage({
                        id: "webdev.security-text",
                        defaultMessage:
                            "Onze servers draaien op een van de meest beveiligde omgevingen en volgens de strengste veiligheidsregels. Wij zorgen ook voor encrypted communicatie tussen onze servers en bezoekers van jouw website. Daarvoor maken we gebruik van SSL protocols, zodat belangrijke wachtwoorden of persoonlijke gegevens niet zullen lekken.",
                    })}
                </BlockText>

                <BlockImage>
                    <img src={Image} alt="veilig ontworpen website" />
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
    scroll-margin-top: 6rem;
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
