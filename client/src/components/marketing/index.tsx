import React from "react";
import ReactGA from "react-ga";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { PageNav, Button } from "../../styles";
import Paragraph from "../paragraph";
import SEO from "../seo";

export default function Marketing() {
    const intl = useIntl();
    ReactGA.pageview("/online-marketing");

    return (
        <Container>
            <SEO
                title="IT Context - Online Marketing"
                description="IT Context helpt uw bedrijf met SEO, online moderne advertenties, Social Media Marketing en veel meer. Alles om uw bedrijf online zichtbaar te maken en meer klanten naar uw website aantrekken."
                url="http://itcontext.nl"
                imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/ITContextLandingPage.jpg"
            />
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
                        "Content marketing is een geweldige manier om de aandacht van het publiek te trekken. Het is gebaseerd op het creëren van digitale inhoud zoals video's, artikelen en posts op sociale media. Het is ontworpen om interesse te wekken in de producten en diensten van het bedrijf. Het kan ook meer verkeer naar jouw site leiden, de verkoop verhogen, merkbekendheid vergroten en trust-recogintion opbouwen.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-1-text-2",
                    defaultMessage:
                        "Hoe promoot je de inhoud? Dit kan net zo boeiend zijn als het creëren van de inhoud zelf. Definieer eerst de kanalen waarnaar je jouw inhoud wilt distribueren. Plan met behulp van content kalendar en meet altijd de resultaten. Vraag IT Context gerust om je te helpen bij het uitvoeren van deze taken.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-1-text-3",
                    defaultMessage:
                        "De goede contentcampagne is gebaseerd op het kennen van jouw publiek. Het moet de vragen van jouw publiek beantwoorden. Om dat te bereiken, moet je ze beter leren kennen. Probeer hun sociale media-accounts op te zoeken en kom erachter welke sites, groepen en profielen ze volgen en pas je strategie daarna aan. Verstrek waardevolle informatie, gebruik verschillende formaten, kies de juiste plaatsen voor jouw inhoud en zorg ervoor dat je rechtstreeks met jouw publiek praat. Stop met zakelijke uitspraken en kies voor informele taal. Maak jouw inhoud uniek, interessant en spannend. Gebruik boeiende titels, zodat ze verder willen en meer willen.",
                })}
            />
            <Link style={{ textDecoration: "none" }} to="/offerte-aanvragen">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-1",
                        defaultMessage: "Vraag direct offerte aan",
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
                        "Zoekmachineoptimalisatie is een techniek om de positie van een website in Organic Search te verbeteren. Organic Search is een onbetaalde ranking van de website-inhoud. Om de plaats in de organische zoekresultaten te verbeteren, moet je trefwoorden gebruiken waarnaar vaak wordt gezocht en die tegelijkertijd relevant zijn voor jouw specifieke bedrijfssituatie.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-2-text-2",
                    defaultMessage:
                        "Zoekmachineoptimalisatie is een continu proces, omdat mensen hun voorkeuren veranderen, de technologie die we gebruiken verandert en zoekmachines worden bereikt door nieuwe algoritmen.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-2-text-3",
                    defaultMessage:
                        "De meest populaire zoekwoorden hebben veel concurrentie. Als je een klein bedrijf hebt, kan het moeilijk zijn om bovenaan de organische zoekresultaten voor die zoekwoorden te verschijnen. Daar kunnen Long Tail Keywords bij helpen. Long Tail Keywords zijn zoekwoorden met weinig concurrentie. Deze zoekwoorden zijn meestal specifieker en bestaan van drie of meer woorden. Trefwoorden moeten relevant zijn en 'keywords stuffing' moet worden vermeden.",
                })}
            />
            <a style={{ textDecoration: "none" }} href="tel:0299705072">
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
                    defaultMessage: "e-mailmarketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-3-text-1",
                    defaultMessage:
                        "Om een e-mailmarketingcampagne te starten, moet je een e-maillijst samenstellen met adressen van klanten die zich op jouw campagne hebben geabonneerd. Je kunt een lijst samenstellen door jouw klanten te vragen zich te abonneren voor korting of een andere soort beloning. Bezoekers kunnen zich ook aanmelden door een formulier op je website in te vullen.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-3-text-2",
                    defaultMessage:
                        "Houd er rekening mee dat in veel landen de toestemming van klanten nodig is om hen een e-mail te mogen sturen. Veerget dus het juiste privacy beleid niet, en een checkbox waarmee wordt bevestigd dat je klanten de Algemeene Voorwaarden over jouw campagne hebben gelezen en ermee akkoord zijn gegaan.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-3-text-3",
                    defaultMessage:
                        "Het verzenden van e-mails alleen levert geen directe winst op, voor jouw of je klanten. Houd er rekening mee dat je de juiste inhoud naar mensen met bepaalde interesses stuurt. Overstelp ze niet met te veel inhoud of te veel e-mails achter elkaar. Vraag je publiek of ze geïnteresseerd zijn in het ontvangen van e-mails over andere producten of diensten. Misschien zijn degenen die een inhoud leuk vinden, geïnteresseerd in een aantal gerelateerde onderwerpen. Bekijk hoe vaak ze graag van je willen horen. Is dit wekelijks of maandelijks? Probeer ze vervolgens te vragen om je feedback te geven over hun winkel- of klantervaring. Vergeet ze ook niet gewoon te bedanken dat ze jouw klanten zijn.",
                })}
            />

            <a
                style={{ textDecoration: "none" }}
                href="mailto:info@itcontext.nl?subject=Ik zou graag meer weten over E-mail Marketing!&body=Stuur mij aub een bijsluiter met meer informatie over e-mail marketing! Groeten!"
            >
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-3",
                        defaultMessage: "Vraag meer over e-mailmarketing",
                    })}
                </CustomButton>
            </a>

            <Paragraph
                id="sem-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-4-header",
                    defaultMessage: "Zoekmachinemarketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-4-text-1",
                    defaultMessage:
                        "Dit zijn betaalde advertenties van jouw website die verschijnen wanneer er op een gericht trefwoord wordt gezocht. Je betaalt alleen voor advertenties waarop geklikt is, daarom wordt er een 'pay-per-click'-advertentie genoemd.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-4-text-2",
                    defaultMessage:
                        "Laat je advertentie er aantrekkelijker uitzien door een relevante koptekst te gebruiken, speciale aanbiedingen te benadrukken en een pakkende call-to-action-zin toe te voegen.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-4-text-3",
                    defaultMessage:
                        "Om het beste uit zoekmachinemarketing te halen, moet je eerst de onderzoekstools beheersen en de juiste trefwoorden selecteren. Je moet je advertentiecampagnes ook op de meest relevante manier structureren. Alle subcategorieën of subspecialiteiten van je bedrijf zouden aparte online campagnes moeten hebben . De bestlopende campagne, met de populairste zoekwoorden, zou het belangrijkst voor je moeten zijn.",
                })}
            />

            <Link style={{ textDecoration: "none" }} to="/contact">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-4",
                        defaultMessage: "Vraag meer over zoekmachinemarketing",
                    })}
                </CustomButton>
            </Link>

            <Paragraph
                id="display-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-5-header",
                    defaultMessage: "Display Advertising",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-5-text-1",
                    defaultMessage:
                        "Display ads zijn moderne advertenties die op websites verschijnen in de vorm van een banner of video. Het is naast de zoekmachinemarketing de meest populaire advertentiemethode. Je kunt deals sluiten met de eigenaar van de website of met netwerken die advertenties op meerdere websites aanbieden. Je kunt je richten op specifieke websites of een specifiek publiek, of op beide.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-5-text-2",
                    defaultMessage:
                        "Display-advertenties zijn niet zoals zoekmachinemarketing advertenties, dus ze reageren niet op zoektermen, maar verschijnen op plaatsen of aan de mensen die mogelijk (maar niet per se) geïnteresseerd zijn in jouw aanbieding.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-5-text-3",
                    defaultMessage:
                        "Display-advertenties zijn gericht op de websites die worden bezocht door mensen die jouw producten willen kopen of mensen wiens online activiteit (zoals bezochte websites of gekochte producten) een hint kan zijn dat zij jouw producten ook leuk zullen vinden. Zoekmachinemarketing en display-advertenties werken ook goed samen.",
                })}
            />

            <a style={{ textDecoration: "none" }} href="tel:0299705072">
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-5",
                        defaultMessage:
                            "Bel ons en vraag hoe wij je kunnen helpen",
                    })}
                </CustomButton>
            </a>

            <Paragraph
                id="social-marketing"
                heading={intl.formatMessage({
                    id: "marketing.paragraph-6-header",
                    defaultMessage: "Social Media Marketing",
                })}
                para1={intl.formatMessage({
                    id: "marketing.paragraph-6-text-1",
                    defaultMessage:
                        "Social media is een geweldige kans om uw naamsbekendheid te vergroten. Er zijn enkele basisregels die je hierbij moet onthouden. Word lid van de juiste social media platformen, deel waardevolle of boeiende inhoud, neem deel aan gesprekken, zoek uit wat mensen leuk vinden en laat uw netwerk groeien. Vermijd agressieve reclame voor jezelf, focus op het leveren van goede inhoud en het vasthouden van de aandacht van je publiek. Luister naar wat mensen te zeggen hebben en probeer hun vragen te beantwoorden.",
                })}
                para2={intl.formatMessage({
                    id: "marketing.paragraph-6-text-2",
                    defaultMessage:
                        "Hoe spreek je met je publiek? Verschillende sociale netwerken creëren verschillende interacties tussen gebruikers. U moet bijvoorbeeld licht en vriendelijk met uw klanten praten op persoonlijke netwerken en 'gezaghebbend' en professioneel op professionele netwerken. Houd uw doelen in gedachten, wees voor uw bestaande klanten dankbaar voor hun loyaliteit en spreek intuïtief met nieuwe klanten die u wilt aantrekken.",
                })}
                para3={intl.formatMessage({
                    id: "marketing.paragraph-6-text-3",
                    defaultMessage:
                        "Je hebt een goed plan nodig. Probeer te beginnen met het beantwoorden van eenvoudige vragen. Wat probeer je te bereiken met sociale media? Het kan zijn dat je je klantenbestand wil vergroten of je bestaande klanten bewust wil laten worden van je aanbod. Wat heb je voor interessants te zeggen? Ontdek wat interessant is voor jouw potentiële klanten en probeer daar aan deel te nemen. Hoe krijg je voor elkaar dat mensen je berichten te delen? Als je een starter bent, nodig dan enkele van jouw vrienden of familie uit om je bedrijf leuk te vinden. Neem deel aan openbare discussies over de onderwerpen die betrekking hebben op jouw bedrijf. Word lid van groepen en deel jouw inhoud daar en becommentarieer de reacties of fotos van anderen.",
                })}
            />

            <a
                style={{ textDecoration: "none" }}
                href="mailto:info@itcontext.nl?subject=Social Media Campagne!&body=Ik zou graag uw advies over oprichten van Social Media Campagne. Neem aub contact met mij op. Groeten!"
            >
                <CustomButton>
                    {intl.formatMessage({
                        id: "marketing.button-6",
                        defaultMessage: "Vraag ons hulp bij Social Media",
                    })}
                </CustomButton>
            </a>
        </Container>
    );
}

const Container = styled.section`
    margin-bottom: 10rem;
`;
const CustomPageNav = styled(PageNav)`
    padding: 2rem 2rem 0rem 2rem;
`;
const CustomButton = styled(Button)`
    margin: 0 auto;
    display: block;
`;
