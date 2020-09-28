import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { PageNav } from "../../styles";
import Paragraph from "../paragraph";

export default function Marketing() {
    const intl = useIntl();

    return (
        <Container>
            <CustomPageNav>
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
            </CustomPageNav>

            <Header />

            <Paragraph
                id="content-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-1-header",
                    defaultMessage: "Content Marketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-1-text-1",
                    defaultMessage:
                        "Content marketing is een geweldige manier om de aandacht van het publiek te trekken. Het is gebaseerd op het creëren van digitale inhoud zoals video's, artikelen, posts op sociale media. Het is ontworpen om interesse te wekken in de producten en diensten van het bedrijf. Het kan ook meer verkeer naar uw site leiden, de verkoop verhogen, merkbekendheid vergroten en trust-recogintion opbouwen.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-1-text-2",
                    defaultMessage:
                        "Hoe promoot u uw inhoud?Het kan net zo boeiend zijn als het creëren van de inhoud zelf. Definieer eerst de kanalen waarnaar u uw inhoud wilt distribueren. Plan Content Calendar en meet altijd de resultaten. Vraag IT Context om u te helpen bij het uitvoeren van deze taken.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-1-text-3",
                    defaultMessage:
                        "De goede contentcampagne is gebaseerd op het kennen van uw publiek. Het moet de vragen van uw publiek beantwoorden. Om dat te bereiken, moet u ze beter kennen. Probeer hun sociale media-accounts op te zoeken en erachter te komen welke sites, groepen, profielen ze volgen en pas daaraan aan. Verstrek waardevolle informatie - gebruik verschillende formaten, kies de juiste plaatsen voor uw inhoud en zorg ervoor dat u rechtstreeks met uw publiek praat. Stop zakelijke spraak en geef prioriteit aan de natuurlijke taal. Maak uw inhoud uniek, interessant en opwindend. Gebruik boeiende titels. Zodat ze meer willen.",
                })}
            />

            <Paragraph
                heading={intl.formatMessage({
                    id: "webdev.paragraph-1-header",
                    defaultMessage: "kosten website maken",
                })}
                para1={intl.formatMessage({
                    id: "webdev.paragraph-1-text-1",
                    defaultMessage:
                        "Veel ondernemers vragen zich af wat zijn de kosten van professionele website? Om dit vraag antwoord te geven moet er juist nog een vraag gesteld worden. Wat voor heb u een website nodig?",
                })}
                para2={intl.formatMessage({
                    id: "webdev.paragraph-1-text-2",
                    defaultMessage:
                        "Het meest voorkomende geval is website die representatieve functies vervult. Bezoekers kunnen erachter komen welke diensten biedt uw bedrijf aan, wat zijn de prijzen, waar bent u gevestigd en hoe is het best om contact met u op te nemen. Op deze website kunt u ook uw prestaties of belangrijke evenementen aankondigen. IT Context ontwerp dergelijke websites al vanaf 247 &euro; exclusief.",
                })}
                para3={intl.formatMessage({
                    id: "webdev.paragraph-1-text-3",
                    defaultMessage:
                        "Waarschijnlijk zou u toch meer van de website verwachten. U wilt dat uw klanten makkelijk online afspraak met u kunnen maken of een offerte aanvragen. Misschien wenst u dat elke klant een persoonlijke account kunt aanmaken en daardoor een toegang krijgen tot voor hem bedoelde inhoud. Heeft u een professionele e-mailadres nodig? IT Context biedt goedkoop e-mail, de prijzen beginnen vanaf 19 &euro; exclusief per jaar. Wilt u inhoud van uw website online beheren? Met ons krijg u toegang tot Content Manager System al vanaf 49 &euro; exclusief per jaar. IT Context helpt u ook met uw eigen webshop oprichten.  Kosten hangen er af van aantal paginas, producten en gewenste functionaliteit.  Er komen nog kleine maandelijke bedragen bij voor o.a. online betalen en server capaciteit.",
                })}
            />

            <Paragraph
                heading={intl.formatMessage({
                    id: "webdev.paragraph-1-header",
                    defaultMessage: "kosten website maken",
                })}
                para1={intl.formatMessage({
                    id: "webdev.paragraph-1-text-1",
                    defaultMessage:
                        "Veel ondernemers vragen zich af wat zijn de kosten van professionele website? Om dit vraag antwoord te geven moet er juist nog een vraag gesteld worden. Wat voor heb u een website nodig?",
                })}
                para2={intl.formatMessage({
                    id: "webdev.paragraph-1-text-2",
                    defaultMessage:
                        "Het meest voorkomende geval is website die representatieve functies vervult. Bezoekers kunnen erachter komen welke diensten biedt uw bedrijf aan, wat zijn de prijzen, waar bent u gevestigd en hoe is het best om contact met u op te nemen. Op deze website kunt u ook uw prestaties of belangrijke evenementen aankondigen. IT Context ontwerp dergelijke websites al vanaf 247 &euro; exclusief.",
                })}
                para3={intl.formatMessage({
                    id: "webdev.paragraph-1-text-3",
                    defaultMessage:
                        "Waarschijnlijk zou u toch meer van de website verwachten. U wilt dat uw klanten makkelijk online afspraak met u kunnen maken of een offerte aanvragen. Misschien wenst u dat elke klant een persoonlijke account kunt aanmaken en daardoor een toegang krijgen tot voor hem bedoelde inhoud. Heeft u een professionele e-mailadres nodig? IT Context biedt goedkoop e-mail, de prijzen beginnen vanaf 19 &euro; exclusief per jaar. Wilt u inhoud van uw website online beheren? Met ons krijg u toegang tot Content Manager System al vanaf 49 &euro; exclusief per jaar. IT Context helpt u ook met uw eigen webshop oprichten.  Kosten hangen er af van aantal paginas, producten en gewenste functionaliteit.  Er komen nog kleine maandelijke bedragen bij voor o.a. online betalen en server capaciteit.",
                })}
            />
        </Container>
    );
}

const Container = styled.section``;
const CustomPageNav = styled(PageNav)`
    padding: 2rem 2rem 0rem 2rem;
`;
