import React from "react";
import { useIntl } from "react-intl";
import Header from "./header";
import Portfolio from "./portfolio";
import Responsive from "./responsive";
import Ux from "./ux";
import Intersection from "../intersection";
import SEO from "../seo";

export default function Landing() {
    const intl = useIntl();

    return (
        <main>
            <SEO
                title="IT Context - Succesvolle Websites"
                description="Website laten maken in Purmerend? Wij bieden de beste prijs-kwaliteit. Websites ontwerpen volgens moderne trends en nieuwste technologieën. Neem contact met ons mee info@itcontext.nl"
                url="http://itcontext.nl"
                imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/ITContextLandingPage.jpg"
            />
            <Header />
            <Responsive />
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
                background={false}
            />
            <Portfolio />
            <Ux />
            <Intersection
                headline={intl.formatMessage({
                    id: "landing.intersection2-headline",
                    defaultMessage:
                        "Vriendelijke en professionele aanpak van klanten behoeften",
                })}
                text={intl.formatMessage({
                    id: "landing.intersection2-text",
                    defaultMessage:
                        "Wij denken met u constructief mee en passen de beste oplossingen. De samenwerking is gebaseerd op het begrijpen van uw behoeften en het reageren op uw opmerkingen",
                })}
                background={false}
            />
        </main>
    );
}
