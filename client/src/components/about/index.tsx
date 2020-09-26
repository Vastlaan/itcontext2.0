import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../styles";
import Header from "./header";
import Paragraph from "../paragraph";
import Intersection from "../intersection";
import Reviews from "./reviews";
import PanoramaImage from "../../img/panorama.jpg";

export default function About() {
    const intl = useIntl();

    return (
        <Container>
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
                    id: "landing.intersection1-headline",
                    defaultMessage: "Voor elk bedrijf dat online wil groeien",
                })}
                text={intl.formatMessage({
                    id: "landing.intersection1-text",
                    defaultMessage:
                        "Onze doel is om betaalbaar, goede kwaliteit websites aan allerlei ondernemingen te leveren. Met eigen e-mailadres, SEO plan en Content Manager System.",
                })}
                background={true}
            />

            <Reviews />
        </Container>
    );
}
const Container = styled.section``;
const Panorama = styled.div`
    width: 100%;
    margin: 5rem 0;

    img {
        object-fit: cover;
        width: 100%;
    }
`;
