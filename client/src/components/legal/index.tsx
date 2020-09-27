import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav } from "../../styles";
import { useIntl } from "react-intl";

export default function Legal() {
    const intl = useIntl();
    return (
        <Container>
            <PageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "navigation.menu-0",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/cookies">Cookies</Link>
                </p>
            </PageNav>
            <Main>
                <h1>Cookies & Privacy Policy for IT Context</h1>

                <h2>1. Waarborgen Privacy</h2>

                <p>
                    Het waarborgen van de privacy van bezoekers van itcontext.nl
                    is een belangrijke taak voor ons. Daarom beschrijven we in
                    onze privacy policy welke informatie we verzamelen en hoe we
                    deze informatie gebruiken.
                </p>

                <h2>2. Toestemming</h2>

                <p>
                    Door de informatie en de diensten op itcontext.nl te
                    gebruiken, gaat u akkoord met onze privacy policy en de
                    voorwaarden die wij hierin hebben opgenomen.
                </p>

                <h2>3. Vragen</h2>
                <p>
                    Als u meer informatie wilt ontvangen, of vragen hebt over de
                    privacy policy van IT Context en specifiek itcontext.nl, kun
                    u ons benaderen via e-mail. Ons e-mailadres is
                    info@itcontext.nl.
                </p>
                <h2>4. Monitoren gedrag bezoeker</h2>
                <p>
                    itcontext.nl maakt gebruik van verschillende technieken om
                    bij te houden wie de website bezoekt, hoe deze bezoeker zich
                    op de website gedraagt en welke pagina’s worden bezocht. Dat
                    is een gebruikelijke manier van werken voor websites omdat
                    het informatie oplevert op die bijdraagt aan de kwaliteit
                    van de gebruikerservaring. De informatie die we, via
                    cookies, registreren, bestaat uit onder meer IP-adressen,
                    het type browser en de bezochte pagina’s. Tevens monitoren
                    we waar bezoekers de website voor het eerst bezoeken en
                    vanaf welke pagina ze vertrekken. Deze informatie houden we
                    anoniem bij en is niet gekoppeld aan andere persoonlijke
                    informatie.
                </p>
                <h2>5. Gebruik van cookies</h2>
                <p>
                    itcontext.nl plaatst cookies bij bezoekers. Dat doen we om
                    informatie te verzamelen over de pagina’s die gebruikers op
                    onze website bezoeken, om bij te houden hoe vaak bezoekers
                    terug komen en om te zien welke pagina’s het goed doen op de
                    website. Ook houden we bij welke informatie de browser
                    deelt.
                </p>
                <h2>6. Cookies uitschakelen</h2>
                <p>
                    U kunt er voor kiezen om cookies uit te schakelen. Dat doet
                    u door gebruik te maken de mogelijkheden van uw browser. U
                    vindt meer informatie over deze mogelijkheden op de website
                    van de aanbieder van uw browser.
                </p>
                <h2>7. Cookies van derde partijen</h2>
                <p>
                    Het is mogelijk dat derde partijen, zoals Google, op onze
                    website adverteren of dat wij gebruik maken van een andere
                    dienst. Daarvoor plaatsen deze derde partijen in sommige
                    gevallen cookies. Deze cookies zijn niet door itcontext.nl
                    te beïnvloeden.
                </p>
                <h2>8. Onze adverteerders</h2>
                <p>
                    Op itcontext.nl adverteren meerdere partijen, die allemaal
                    hun eigen cookies plaatsen. Deze adverteerders gebruiken
                    technologie voor hun advertenties en de links in hun
                    advertenties die direct door uw browser worden herkend. Ze
                    gebruiken onder meer automatische herkenning van IP-adressen
                    die rechtstreeks naar de adverteerder wordt gestuurd.
                    Daarnaast worden cookies, javascript en eventueel webbeacons
                    ingezet om te monitoren hoe effectief de campagnes van deze
                    partijen zijn. itcontext.nl heeft noch invloed noch controle
                    over de cookies, het javascript en de webbeacons die onze
                    adverteerders gebruiken. Al deze partijen hebben een eigen
                    privacy policy en hanteren deze privacy policy voor het
                    gebruik van hun website en de daaraan gekoppelde diensten.
                    Meer informatie over hoe deze partijen omgaan met privacy
                    vindt u op de websites van deze partijen.
                </p>
                <h2>9. Privacy policy van adverteerders/derde partijen</h2>
                <p>
                    Voor meer informatie over de privacy policy van onze
                    adverteerders en derde partijen die verbonden zijn aan deze
                    website, kun u terecht op de websites van deze
                    respectievelijke partijen. itcontext.nl kan geen invloed
                    uitoefenen op deze cookies en de privacy policy van door
                    derden geplaatste cookies. Deze cookies vallen buiten het
                    bereik van de privacy policy van itcontext.nl.
                </p>
                <h2>10. DART-cookie van Google</h2>
                <p>
                    Het gebruik van een DART-cookie door Google, maakt het
                    mogelijk dat er advertenties op onze website worden getoond.
                    Daarnaast wordt deze cookie gebruikt voor het tonen van
                    advertenties op andere websites. U kunt er voor kiezen om
                    geen gebruik meer te maken van de DART Cookie. Dat doet u
                    door de volgende website te bezoeken:{" "}
                    <a href="https://support.google.com/adsense/answer/2839090?hl=nl">
                        DART
                    </a>
                </p>
                <h2>11. Informatie van kinderen</h2>
                <p>
                    Wij vinden het belangrijk om te zorgen voor extra
                    bescherming voor kinderen die online actief zijn. We
                    moedigen ouders en opvoeders aan om samen tijd online te
                    besteden. Op die manier kunt u zien hoe uw kinderen zich
                    online gedragen, wat ze precies online doen en kunt u helpen
                    in het sturen van hun gedrag. itcontext.nl verzamelt geen
                    informatie van kinderen jonger dan 13 jaar oud. Mocht u
                    constateren dat deze regel wordt overtreden door ons of ons
                    team, neemt u dan contact met ons op via bovenstaande
                    contactmogelijkheid.
                </p>
            </Main>
        </Container>
    );
}
const Container = styled.section`
    // margin: 10rem 0rem;
    padding: 2rem;
`;
const Main = styled.section`
    * {
        ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.greyDark};
    }
    h1 {
        font-family: ${fonts.advent};
        font-size: 3rem;
        color: ${(props) => props.theme.primary};
    }
    h2 {
        font-family: ${fonts.advent};
        color: ${(props) => props.theme.tertiary};
        font-size: 2.5rem;
    }
    ul {
        padding: 2rem;
        font-size: 1.8rem;

        &li {
            font-family: ${fonts.cormoran};
            color: ${(props) => props.theme.greyDark};
        }
    }
    p,
    ul {
        background-color: ${(props) => props.theme.bg};
        padding: 1rem;
    }
`;
