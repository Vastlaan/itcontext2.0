import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav, MainLayout } from "../../styles";
import { useIntl } from "react-intl";
import Cards from "./cards";
import Paragraph from "../paragraph";
import Intersection from "../intersection";
import InfoStrip from "../infoStrip";
import Header from "./header";
import Security from "./security";
import SEO from "../seo";
import { FaHandshake } from "react-icons/fa";

export default function Webdev() {
    const intl = useIntl();
    ReactGA.pageview("/website-ontwikkelen");

    return (
        <Container>
            <SEO
                title="IT Context - Websites ontwikkelen"
                description="IT Context ontwerpt betaalbaar en professionele websites, complexe webapplicaties en webshops. Specialisten in profiessionele e-mailadressen aanmaken, Content Manager Systems, Databeses en Systems Administration."
                url="https://itcontext.nl"
          imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext-poster.jpg"
            />
            <Header />
            <PageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "webdev.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/website-ontwerpen">
                        {intl.formatMessage({
                            id: "webdev.pagenav-current",
                            defaultMessage: "Website Ontwerpen",
                        })}
                    </Link>
                </p>
            </PageNav>
            <MainLayout>
                <Cards />

                <Paragraph
                    heading={intl.formatMessage({
                        id: "webdev.paragraph-1-header",
                        defaultMessage: "kosten website maken",
                    })}
                    para1={intl.formatMessage({
                        id: "webdev.paragraph-1-text-1",
                        defaultMessage:
                            "Veel ondernemers vragen zich af wat de kosten zijn voor het laten maken van een professionele website. Om deze vraag te beantwoorden moet er juist nog een vraag gesteld worden. Waar voor heb je een website nodig?",
                    })}
                    para2={intl.formatMessage({
                        id: "webdev.paragraph-1-text-2",
                        defaultMessage:
                            "Het meest voorkomende geval is een website die representatieve functies vervult. Bezoekers kunnen erachter komen welke producten of diensten je bedrijf aanbiedt, wat de prijzen zijn, waar je gevestigd bent en hoe men het beste contact met je op kan nemen. Op deze website kunt je ook jouw prestaties of belangrijke evenementen aankondigen. IT Context ontwerpt dergelijke websites al vanaf 247 &euro; exclusief btw.",
                    })}
                    para3={intl.formatMessage({
                        id: "webdev.paragraph-1-text-3",
                        defaultMessage:
                            "Waarschijnlijk zou je toch meer van de website verwachten. Je wilt dat jouw klanten makkelijk online een afspraak met je kunnen maken of eenvoudig een offerte kunnen aanvragen. Misschien wil je dat elke klant een persoonlijke account kan aanmaken en daardoor toegang krijgt tot voor hem bedoelde inhoud. Heb je een professioneel e-mailadres nodig? IT Context biedt goedkoop e-mail aan, de prijzen beginnen bij €19 exclusief btw per jaar. Wil je inhoud van joiw website online beheren? Met ons krijg je onbeperkt toegang tot Content Management Systeem vanaf €49 exclusief per jaar. IT Context helpt je ook bij het oprichten van je eigen webshop. De kosten hangen af van het aantal paginas, producten en de gewenste functionaliteit. Er komen nog kleine maandelijkse bedragen bij voor o.a. online betalen en de server capaciteit.",
                    })}
                />

                <Intersection
                    headline={intl.formatMessage({
                        id: "webdev.intersection-1-headline",
                        defaultMessage: "Beste prijs-kwaliteitverhouding",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.intersection-1-text",
                        defaultMessage:
                            "bij het ontwerpen van onze websites zijn wij gedreven door innovatie, analyse van de doelgroep- en concurrentiegedrag, waarbij we proberen om hen altijd een stap voor te zijn",
                    })}
                    background={false}
                />

                <Security />

                <InfoStrip
                    text={intl.formatMessage({
                        id: "webdev.stip-text",
                        defaultMessage:
                            "Onze klanten krijgen altijd veel persoonlijke aandacht. Omdat de beste resultaten alleen mogelijk te bereiken zijn door volledige betrokkenheid en een nauwe samenwerking.",
                    })}
                    btn={intl.formatMessage({
                        id: "webdev.stip-btn",
                        defaultMessage: "Vind uw oplossingen",
                    })}
                    note={intl.formatMessage({
                        id: "webdev.stip-note",
                        defaultMessage: "met IT Context",
                    })}
                    icon={<FaHandshake />}
                />
            </MainLayout>
            
        </Container>
    );
}

const Container = styled.main``;
