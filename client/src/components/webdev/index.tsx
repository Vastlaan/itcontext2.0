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
