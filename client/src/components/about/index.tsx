import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { useIntl } from "react-intl";
//components
import Header from "./header";
import Paragraph from "../paragraph";
import Intersection from "../intersection";
import Reviews from "./reviews";
import PanoramaImage from "../../img/panorama.jpg";
import SEO from "../seo";

export default function About() {
    const intl = useIntl();

    ReactGA.pageview("/over-ons");

    return (
        <Container>
            <SEO
                title="IT Context - Over Ons"
                description="IT Context ontwerp moderne websites, professionele webapplicaties en webshops. Duik in onze website en leer ons beter kennen."
                url="https://itcontext.nl"
                imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/ITContextLandingPage.jpg"
            />
            <Header />
            <Panorama>
                <img
                    src={PanoramaImage}
                    alt="moderne websites voor ondernemingen"
                />
            </Panorama>
            <Paragraph
                heading={intl.formatMessage({
                    id: "about.paragraph-1-header",
                    defaultMessage: "kosten website maken",
                })}
                para1={intl.formatMessage({
                    id: "about.paragraph-1-text-1",
                    defaultMessage:
                        "Wij zijn het jonge en ambitieuze bedrijf dat zich op de snelgroeiende digitale markt richt. We helpen onze klanten hun weg te vinden om online zich te kunnen onderscheiden,  bekendheid van het bedrijf op te bouwen en meer mensen te bereiken.",
                })}
                para2={intl.formatMessage({
                    id: "about.paragraph-1-text-2",
                    defaultMessage:
                        "Onze teamleden bestaan uit gekwalificeerde freelancers die eerder voor grote bedrijven hebben gewerkt en hun kennis hebben opgedaan door deel te nemen aan het ontwerpen van geavanceerde projecten. We komen allemaal uit Polen, maar sommigen van ons wonen en werken in Nederland. We hebben het merk IT Context gecreëerd om onze connecties op de Nederlandse markt uit te breiden.",
                })}
                para3={intl.formatMessage({
                    id: "about.paragraph-1-text-3",
                    defaultMessage:
                        "Waarschijnlijk zou u toch meer van de website verwachten. U wilt dat uw klanten makkelijk online afspraak met u kunnen maken of een offerte aanvragen. Misschien wenst u dat elke klant een persoonlijke account kunt aanmaken en daardoor een toegang krijgen tot voor hem bedoelde inhoud. Heeft u een professionele e-mailadres nodig? IT Context biedt goedkoop e-mail, de prijzen beginnen vanaf 19 &euro; exclusief per jaar. Wilt u inhoud van uw website online beheren? Met ons krijg u toegang tot Content Manager System al vanaf 49 &euro; exclusief per jaar. IT Context helpt u ook met uw eigen webshop oprichten.  Kosten hangen er af van aantal paginas, producten en gewenste functionaliteit.  Er komen nog kleine maandelijke bedragen bij voor o.a. online betalen en server capaciteit.",
                })}
            />
            <Intersection
                headline={intl.formatMessage({
                    id: "about.intersection1-headline",
                    defaultMessage: "Professioneel, loyaal en betrokken",
                })}
                text={intl.formatMessage({
                    id: "about.intersection1-text",
                    defaultMessage:
                        "we bouwen de reputatie op de succesverhalen van onze klanten, zodat het in ons grote belang is om u te helpen een lokale tycoon te worden in uw branche",
                })}
                background={true}
            />

            <Reviews />
        </Container>
    );
}
const Container = styled.section`
    width: 100%;
`;
const Panorama = styled.div`
    width: 100%;
    margin: 5rem 0;

    img {
        object-fit: cover;
        width: 100%;
    }
`;
