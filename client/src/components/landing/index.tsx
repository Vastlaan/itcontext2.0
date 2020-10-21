import React from "react";
import styled from 'styled-components'
import ReactGA from "react-ga";
import { useIntl } from "react-intl";
import Header from "./header";
import Portfolio from "./portfolio";
import Responsive from "./responsive";
import Ux from "./ux";
import Intersection from "../intersection";
import OfertCTA from '../ofertCTA'
import SEO from "../seo";
import {MainLayout} from '../../styles'

export default function Landing() {
    const intl = useIntl();

    ReactGA.pageview("/");

    return (
        <>
            <SEO
                title="IT Context - Succesvolle Websites"
                description="Website laten maken in Purmerend? Wij bieden de beste prijs-kwaliteitverhouding. Websites ontwerpen volgens moderne trends en nieuwste technologieën. Neem contact met ons mee info@itcontext.nl"
                url="http://itcontext.nl"
                imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/ITContextLandingPage.jpg"
            />
            <Header />
            <MainLayout>
                <Responsive />
                <Intersection
                    headline={intl.formatMessage({
                        id: "landing.intersection1-headline",
                        defaultMessage: "Voor elk bedrijf dat online wil groeien",
                    })}
                    text={intl.formatMessage({
                        id: "landing.intersection1-text",
                        defaultMessage:
                            "Ons doel is om kwalitatieve en betaalbare websites te leveren aan allerlei ondernemingen. Met eigen e-mailadres, SEO plan en Content Management Systeem.",
                    })}
                    background={false}
                />
            </MainLayout>

            <Portfolio />

            <MainLayout>
                <OfertCTA/>
                <Ux />
                <Intersection
                    headline={intl.formatMessage({
                        id: "landing.intersection2-headline",
                        defaultMessage:
                            "Vriendelijke en professionele aanpak van klant behoeften",
                    })}
                    text={intl.formatMessage({
                        id: "landing.intersection2-text",
                        defaultMessage:
                            "Wij denken constructief met je mee en passen de beste oplossingen toe. Onze samenwerking is gebaseerd op het begrijpen van jou behoeften en het reageren op jouw verwachtingen",
                    })}
                    background={false}
                />
            </MainLayout>
            
        </>
    );
}
