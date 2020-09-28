import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { PageNav, Button } from "../../styles";
import Paragraph from "../paragraph";

export default function Marketing() {
    const intl = useIntl();

    return (
        <Container>
            <CustomPageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "marketing.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/website-ontwerpen">
                        {intl.formatMessage({
                            id: "marketing.pagenav-current",
                            defaultMessage: "Online Marketing",
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
            <Link style={{ textDecoration: "none" }} to="/contact">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-1",
                        defaultMessage: "Vraag ons voor meer informatie",
                    })}
                </CustomButton>
            </Link>

            <Paragraph
                id="seo-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-2-header",
                    defaultMessage: "Zoekmachineoptimalisatie (SEO)",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-2-text-1",
                    defaultMessage:
                        "Zoekmachineoptimalisatie is een techniek om de positie van een website in Organic Search te verbeteren. Organic Search is een onbetaalde ranking van de website-inhoud. Om de plaats in de zoekresultaten te verbeteren, moet u trefwoorden gebruiken waarnaar even vaak wordt gezocht en die tegelijkertijd relevant zijn voor uw specifieke bedrijfssituatie.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-2-text-2",
                    defaultMessage:
                        "Zoekmachineoptimalisatie is een continu proces, omdat mensen hun voorkeuren veranderen, de technologie die we gebruiken verandert en zoekmachines worden bereikt door nieuwe algoritmen.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-2-text-3",
                    defaultMessage:
                        "De meest populaire zoekwoorden hebben veel concurrentie. Als u een klein bedrijf bent, kan het moeilijk zijn om bovenaan de rangschikkingsresultaten voor die zoekwoorden te verschijnen. Daar kunnen Long Tail Keywords helpen. Long Tail Keywords zijn zoekwoorden met een kleine concurrentie en meestal specifieker. Trefwoorden moeten relevant zijn en de website moet vermijden 'keywords stuffing'.",
                })}
            />
            <a style={{ textDecoration: "none" }} href="tel:0031682307051">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-2",
                        defaultMessage: "bel ons voor gratis advies",
                    })}
                </CustomButton>
            </a>

            <Paragraph
                id="email-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-3-header",
                    defaultMessage: "e-mail marketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-3-text-1",
                    defaultMessage:
                        "Om een e-mailmarketingcampagne te starten, moet u de e-maillijst samenstellen met adressen van klanten die zich op uw campagne hebben geabonneerd. U kunt uw lijst samenstellen door uw klanten te vragen zich te abonneren voor korting of een ander soort beloning. Het kan ook gebeuren door het formulier op uw website in te vullen.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-3-text-2",
                    defaultMessage:
                        "Houd er rekening mee dat veel landen de toestemming van klanten nodig hebben om hen een e-mail te sturen, dus vergeet het juiste beleid niet, en die checkbox waarmee wordt bevestigd dat uw klanten Algemeene Voorwaarden over uw campagne hebben gelezen en ermee akkoord zijn gegaan.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-3-text-3",
                    defaultMessage:
                        "Het verzenden van alleen de e-mails levert geen winst op, noch voor u of uw klanten. Houd er rekening mee dat u de juiste inhoud naar mensen met bepaalde interesses stuurt. Overstelp ze niet met te veel inhoud of te veel e-mails is opeenvolgend. Vraag hen of ze geïnteresseerd zijn in het ontvangen van e-mails over andere producten of diensten. Misschien zijn degenen die een inhoud leuk vinden, geïnteresseerd in een aantal gerelateerde onderwerpen. Kijk hoe vaak ze graag van je willen horen? Is het wekelijks of maandelijks? Probeer ze vervolgens te vragen je feedback te geven over jou winkel- of klantervaring. Vergeet hen niet gewoon te bedanken dat ze uw klanten zijn.",
                })}
            />

            <a
                style={{ textDecoration: "none" }}
                href="mailto:info@itcontext.nl?subject=Ik zou graag meer weten over E-mail Marketing!&body=Stuur mij aub een bijsluiter met meer informatie over e-mail marketing! Groeten!"
            >
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-3",
                        defaultMessage: "Vraag meer over e-mail marketing",
                    })}
                </CustomButton>
            </a>

            <Paragraph
                id="sem-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-4-header",
                    defaultMessage: "Search Engine Marketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-4-text-1",
                    defaultMessage:
                        "Dit zijn betaalde advertenties van uw website die verschijnen wanneer er op een gericht trefwoord wordt gezocht. U betaalt alleen voor advertenties waarop is geklikt, daarom wordt er een 'pay-for-click'-advertentie genoemd.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-4-text-2",
                    defaultMessage:
                        "Laat uw advertentie er aantrekkelijker uitzien door een relevante koptekst te gebruiken, speciale aanbiedingen te benadrukken en een pakkende call-to-action-zin toe te voegen.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-4-text-3",
                    defaultMessage:
                        "Om het beste uit SEM te halen, moet u eerst onderzoekstools beheersen en trefwoorden selecteren. U moet ook uw advertentiecampagnes op de meest relevante manier structureren. Alle subcategorieën of subspecialiteiten van uw bedrijf zouden aparte campagnes online moeten hebben en de meest gewilde zou het belangrijkst voor u moeten zijn.",
                })}
            />

            <Link style={{ textDecoration: "none" }} to="/contact">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-1",
                        defaultMessage: "Vraag ons voor meer informatie",
                    })}
                </CustomButton>
            </Link>
        </Container>
    );
}

const Container = styled.section``;
const CustomPageNav = styled(PageNav)`
    padding: 2rem 2rem 0rem 2rem;
`;
const CustomButton = styled(Button)`
    margin: 0 auto;
    display: block;
`;
