import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../styles";
import Header from "./header";
import Paragraph from "../paragraph";

export default function About() {
    const intl = useIntl();

    return (
        <Container>
            <Header />
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
