import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav } from "../../styles";
import { useIntl } from "react-intl";

export default function Voorwaarden() {
    const intl = useIntl();

    return (
        <Container>
            <PageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "navigationHome",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/cookies">
                        {intl.formatMessage({
                            id: "cookiesNavCurrent",
                            defaultMessage: "Cookies",
                        })}
                    </Link>
                </p>
            </PageNav>
            <Main>
                <h1>Algemene voorwaarden IT Context webontwikkeling</h1>

                <h2>Artikel 1. Definities </h2>

                <p>
                    1.1. IT Context: de eenmanszaak IT Context, statutair
                    gevestigd te Purmerend en ingeschreven bij de Kamer van
                    Koophandel onder dossiernummer NUMMER. <br />
                    1.2. Opdrachtgever: de natuurlijke persoon of rechtspersoon
                    die met IT Context een overeenkomst is aangegaan <br />
                    1.3. Onder 'algemene voorwaarden' wordt verstaan: het geheel
                    van de bepalingen als hierna opgenomen. <br />
                    1.4 Diensten: alle diensten die IT Context voor de
                    Opdrachtgever uitvoert. Hieronder wordt onder andere
                    verstaan, doch niet uitsluitend: het ontwikkelen van, het
                    onderhouden van en het adviseren over websites alsmede het
                    ontwikkelen van Producten. <br />
                    1.5 Producten: alle producten die IT Context aan de
                    Opdrachtgever levert. Hieronder worden onder andere, doch
                    niet uitsluitend verstaan: (zelf ontwikkelde of van derede
                    partijen) software waarmee een website beheerd kan worden
                    (CMS) en overige applicaties.
                </p>

                <h2>Artikel 2. Toepasselijkheid </h2>

                <p>
                    2.1 Deze algemene voorwaarden zijn van toepassing op alle
                    door IT Context gedane aanbiedingen, uitgebrachte offertes,
                    gesloten overeenkomsten, verrichte Diensten, geleverde
                    Producten en overige verrichte handelingen, tenzij
                    schriftelijk anders is overeengekomen. <br />
                    2.2 Door ondertekening van een overeenkomst of
                    opdrachtbevestiging met IT Context verklaart de
                    Opdrachtgever dat hij kennis heeft genomen van deze algemene
                    voorwaarden van IT Context en dat hij met deze voorwaarden
                    akkoord gaat. <br />
                    2.3 Eventuele inkoop- of andere voorwaarden van de
                    Opdrachtgever zijn niet van toepassing. <br />
                    2.4 Indien enige bepaling van deze algemene voorwaarden
                    nietig is of vernietigd wordt, zullen de overige bepalingen
                    van deze algemene voorwaarden volledig van kracht blijven en
                    zullen IT Context en Opdrachtgever in overleg treden
                    teneinde nieuwe bepalingen ter vervanging van de nietige
                    c.q. vernietigde bepalingen overeen te komen, waarbij zoveel
                    mogelijk het doel en de strekking van de nietige c.q.
                    vernietigde bepaling in acht worden genomen.
                    <br />
                    2.5 Indien de Opdrachtgever in zijn opdracht bepalingen of
                    voorwaarden opneemt die afwijken van, of niet voorkomen in,
                    deze voorwaarden zijn deze voor IT Context alleen bindend
                    indien en voor zover deze door IT Context uitdrukkelijk
                    schriftelijk zijn aanvaard. <br />
                    2.6 Indien IT Context op eigen initiatief ten gunste van
                    Opdrachtgever afwijkt van de algemene voorwaarden kunnen
                    daar door Opdrachtgever nimmer enige rechten aan ontleend
                    worden.
                </p>

                <h2>Artikel 3. Offertes en aanbiedingen </h2>

                <p>
                    3.1 Alle offertes zijn vrijblijvend tenzij uitdrukkelijk
                    anders is vermeld. <br />
                    3.2 Indien blijkt dat de bij de aanvraag of overeenkomst
                    door de Opdrachtgever verstrekte gegevens onjuist waren
                    heeft IT Context het recht de betreffende prijzen en andere
                    voorwaarden aan te passen. <br />
                    3.3 Offertes van IT Context zijn geldig voor de in de
                    offerte aangegeven termijn. Indien er geen termijn is
                    aangegeven, is de offerte geldig tot dertig dagen na de
                    datum waarop de offerte is uitgebracht.
                </p>

                <h2>Artikel 4. Overeenkomst en meerwerk </h2>

                <p>
                    4.1 Een overeenkomst tussen IT Context en de Opdrachtgever
                    komt tot stand nadat de Opdrachtgever een door IT Context
                    uitgevaardigd aanbod of offerte heeft aanvaard. <br />
                    4.2 Indien IT Context, door omstandigheden ten tijde van de
                    offerte of de opdrachtbevestiging onbekend, meer werk moet
                    verrichten dan overeengekomen is in de offerte of
                    opdrachtbevestiging, is IT Context gerechtigd de daaruit
                    voortvloeiende meer kosten aan Opdrachtgever in rekening te
                    brengen. Indien Opdrachtgever bezwaar heeft tegen de
                    meerkosten die IT Context in rekening wenst te brengen,
                    heeft hij het recht het nog niet uitgevoerde gedeelte van de
                    opdracht te annuleren, waarbij de Opdrachtgever gehouden is
                    het tot dusver door IT Context uitgevoerde werk te
                    vergoeden. <br />
                    4.3 Wijzigingen in de oorspronkelijk gesloten overeenkomst
                    tussen de Opdrachtgever en IT Context zijn pas geldig vanaf
                    het moment dat deze wijzigingen middels een aanvullende of
                    gewijzigde schriftelijke overeenkomst zijn aanvaard door
                    beide partijen. <br />
                    4.4 Indien de Opdrachtgever een overeenkomst met IT Context
                    wenst te ontbinden of annuleren komt hem dit recht enkel toe
                    indien hij IT Context geheel vergoedt voor de tot dan toe
                    verrichte werkzaamheden of ingeval van annulering tien
                    procent van het in de opdrachtbevestiging overeengekomen
                    honorarium.
                </p>
                <h2>Artikel 5. Rechten en verplichtingen voor IT Context </h2>

                <p>
                    5.1 IT Context garandeert dat de haar verstrekte opdracht
                    naar beste kunnen wordt uitgevoerd onder toepassing van
                    voldoende zorgvuldigheid en vakmanschap. <br />
                    5.2 IT Context spant zich in om de gegevens die IT Context
                    voor de Opdrachtgever opslaat zodanig te beveiligen dat deze
                    gegevens niet beschikbaar zijn voor onbevoegde personen.
                    <br />
                    5.3 Bij kenbaar gemaakte klachten van de Opdrachtgever over
                    de geleverde Diensten en/of Producten dient IT Context met
                    Opdrachtgever in overleg te treden over een voor beiden
                    passende oplossing.
                </p>

                <h2>
                    Artikel 6. Rechten en verplichtingen voor Opdrachtgever{" "}
                </h2>

                <p>
                    6.1 De Opdrachtgever dient zich in beginsel te houden aan de
                    in deze voorwaarden neergelegde bepalingen, tenzij anders
                    overeengekomen. <br />
                    6.2 De Opdrachtgever draagt er zorg voor dat alle gegevens
                    en/of materialen, waarvan IT Context aangeeft dat deze
                    noodzakelijk zijn of waarvan de Opdrachtgever redelijkerwijs
                    behoort te weten dat deze noodzakelijk zijn voor het
                    uitvoeren van de overeenkomst, tijdig aan IT Context worden
                    verstrekt. <br />
                    6.3 Indien in uitzondering op artikel 6.2 de voor de
                    uitvoering van de overeenkomst benodigde gegevens niet
                    tijdig aan IT Context zijn verstrekt, heeft IT Context het
                    recht de uitvoering van de overeenkomst op te schorten en/of
                    de uit de vertraging voortvloeiende extra kosten aan de
                    Opdrachtgever in rekening te brengen. <br />
                    6.4 De Opdrachtgever stelt IT Context steeds onverwijld
                    schriftelijk op de hoogte van enige wijzigingen in naam,
                    adres, email en desgevraagd, zijn/haar bank- of gironummer.{" "}
                    <br />
                    6.5 Bij klachten over de door IT Context geleverde Diensten
                    en/of Producten dient de Opdrachtgever deze klachten kenbaar
                    te maken aan IT Context binnen veertien (14) dagen na
                    levering van de Dienst en/of het Product. De Opdrachtgever
                    vrijwaart IT Context één jaar na levering van alle
                    juridische claims naar aanleiding van geleverde Diensten
                    en/of Producten. <br />
                    6.6 De Opdrachtgever dient zelf reservekopieën te maken van
                    alle materialen/gegevens als omschreven in artikel 6.2 die
                    IT Context nodig heeft voor de uitvoering van de
                    overeenkomst. Bij verlies van deze materialen/gegevens is IT
                    Context niet aansprakelijk voor de daaruit voortvloeiende
                    schade.
                </p>

                <h2>Artikel 7. Levering</h2>

                <p>
                    7.1 De door IT Context te hanteren leveringstermijn varieert
                    per opdracht en worden in overleg met Opdrachtgever
                    vastgesteld. De door IT Context opgegeven levertijd begint
                    nadat alle benodigde gegevens en/of materialen in het bezit
                    van IT Context zijn zoals bepaald in artikel 6.2, waarna IT
                    Context zal proberen om levering zo spoedig als mogelijk is
                    te doen plaatsvinden. <br />
                    7.2 Een door IT Context vastgestelde leveringstermijnen kan
                    nimmer als fatale termijn beschouwd worden. Door het enkele
                    overschrijden van een leveringstermijn raakt IT Context niet
                    van rechtswege in verzuim. <br />
                    7.3 Bij overschrijding van de levertermijn met meer dan
                    dertig dagen, komt de Opdrachtgever de bevoegdheid tot
                    ontbinding van de overeenkomst slechts toe indien IT
                    Context, na een deugdelijke en zo gedetailleerd mogelijke
                    schriftelijke ingebrekestelling waarbij een redelijke
                    termijn gesteld wordt voor zuivering van de tekortkoming,
                    toerekenbaar tekortschiet in de nakoming van de wezenlijke
                    verplichtingen ingevolge de overeenkomst. <br />
                    7.4 De Opdrachtgever is gehouden datgene te doen wat nodig
                    is om een tijdige levering door IT Context mogelijk te
                    maken, onder meer door tijdig volledige, correcte en
                    duidelijke gegevens aan te leveren zoals bepaald in artikel
                    6.2. <br />
                    7.5 Aan de leveringsplicht van IT Context zal, behoudens
                    tegenbewijs, zijn voldaan zodra de door IT Context geleverde
                    zaken een keer aan de Opdrachtgever zijn aangeboden.
                </p>
                <h2>Artikel 8. Betaling</h2>

                <p>
                    8.1 Alle door IT Context verzonden facturen dienen door de
                    Opdrachtgever binnen dertig dagen betaald te worden, tenzij
                    schriftelijk anders is overeengekomen. <br />
                    8.2 Indien Opdrachtgever niet tijdig aan zijn
                    betalingsverplichting voldoet is de Opdrachtgever van
                    rechtswege in verzuim zonder dat een nadere
                    ingebrekestelling nodig is. <br />
                    8.3 Bij een niet tijdige betaling is de Opdrachtgever, naast
                    het verschuldigde bedrag vermeerderd met de wettelijke
                    rente, gehouden tot een volledige vergoeding van zowel
                    buitengerechtelijke als gerechtelijke incassokosten,
                    daaronder begrepen de kosten voor advocaten, deurwaarders en
                    incassobureaus. <br />
                    8.4 De vordering tot betaling is direct opeisbaar ingeval de
                    Opdrachtgever in staat van faillissement wordt verklaard,
                    surséance van betaling aanvraagt dan wel algeheel beslag op
                    vermogensbestanddelen van de Opdrachtgever wordt gelegd, de
                    Opdrachtgever overlijdt en voorts, indien deze in liquidatie
                    treedt of wordt ontbonden.
                </p>
                <h2>
                    Artikel 9. Voorbehoud van eigendom & intellectueel eigendom{" "}
                </h2>

                <p>
                    9.1 De door IT Context geleverde producten blijven eigendom
                    van IT Context tot het moment dat de Opdrachtgever alle
                    verplichtingen uit de met IT Context gesloten overeenkomst
                    deugdelijk is nagekomen. <br />
                    9.2 Ingeval IT Context een beroep doet op het
                    eigendomsvoorbehoud, geldt de ter zake gesloten overeenkomst
                    als ontbonden, onverminderd het recht van IT Context
                    vergoeding van schade, gederfde winst en interest te
                    vorderen. <br />
                    9.3 De door IT Context geleverde producten mogen,
                    gedeeltelijk of geheel, nooit worden verveelvoudigd of
                    worden doorverkocht, tenzij schriftelijk anders is
                    overeengekomen. <br />
                    9.4 De inhoud van de website van IT Context, waaronder doch
                    niet uitsluitend: de teksten, afbeeldingen, vormgeving,
                    merken en domeinnamen, zijn het eigendom van IT Context en
                    worden beschermd door auteursrechten en intellectuele of
                    industriële eigendomsrechten die onder het toepasselijk
                    recht bestaan. Het is gebruikers van de website niet
                    toegestaan om de Website of enig gedeelte daarvan te
                    verveelvoudigen dan wel ter beschikking te stellen zonder
                    toestemming van IT Context. <br />
                    9.5 Alle auteursrechten en intellectuele eigendommen op door
                    IT Context ontwikkelde voortbrengselen van de menselijke
                    geest, zijn en blijven exclusieve eigendom van IT Context.
                </p>

                <h2>Artikel 10 Licentie</h2>

                <p>
                    10.1 De aan de Opdrachtgever verstrekte Producten worden
                    vertrekt op grond van een licentie, tenzij nadrukkelijk
                    anders is overeengekomen. <br />
                    10.2 De licentie betreft een niet-exclusieve licentie tot
                    het gebruik van de door IT Context beschikbaar gestelde
                    producten. <br />
                    10.3 De licentie wordt afgenomen voor een minimale termijn
                    van één jaar. Deze termijn wordt telkenmale verlengd met één
                    jaar, tenzij de Opdrachtgever IT Context één maand voor het
                    ingaan van de nieuwe termijn aangeeft niet langer gebruik te
                    willen maken van de Producten. <br />
                    10.4 Het is de Opdrachtgever niet toegestaan om de onder
                    licentie verstrekte Producten aan derden over te dragen, te
                    kopiëren of op enige andere wijze te openbaren. <br />
                    10.5 De door IT Context geschreven CMS systemen blijven te
                    allen tijden eigendom van IT Context.
                </p>
                <h2>Artikel 11. Overmacht </h2>

                <p>
                    11.1 IT Context is niet gehouden tot het nakomen van enige
                    verplichtingen ten opzichte van de Opdrachtgever indien hij
                    daartoe gehinderd wordt als gevolg van een omstandigheid die
                    niet is te wijten aan zijn schuld, noch krachtens de wet,
                    een rechtshandeling of in het verkeer geldende opvattingen
                    voor zijn rekening komt. <br />
                    11.2 IT Context kan gedurende de periode dat de overmacht
                    voortduurt de verplichtingen uit de overeenkomst opschorten.
                    Indien de overmacht langer voortduurt dan een periode van
                    negentig (90) dagen, is zowel de Opdrachtgever als IT
                    Context gerechtigd de overeenkomst te ontbinden, zonder
                    enige verplichting tot het vergoeden van de door andere
                    partij geleden schade.
                </p>
                <h2>Artikel 12. Aansprakelijkheid</h2>

                <p>
                    12.1 Iedere overeenkomst tussen IT Context en de
                    Opdrachtgever is te typeren als een inspanningsovereenkomst.
                    IT Context kan als gevolg nimmer aansprakelijk worden
                    gesteld voor niet behaalde resultaten. <br />
                    12.2 Indien IT Context onverhoopt hetgeen bepaald in artikel
                    12.1 toch aansprakelijk wordt gesteld, is iedere
                    aansprakelijkheid beperkt tot het bedrag dat krachtens de
                    toepasselijke verzekeringsovereenkomst in het desbetreffende
                    geval wordt uitgekeerd. <br />
                    12.3 Mocht in uitzondering op hetgeen bepaald in artikel
                    12.2 geen uitkering krachten de toepasselijke verzekering
                    plaatsvinden is de aansprakelijkheid van IT Context beperkt
                    tot maximaal de factuurwaarde van de overeenkomst, althans
                    tot dat gedeelte van de overeenkomst waarop de
                    aansprakelijkheid betrekking heeft. <br />
                    12.4 In aanvulling op artikel 12.2 en 12.3 is IT Context dan
                    alleen aansprakelijk voor directe schade. Onder directe
                    schade dient men uitsluitend te verstaan: • de redelijke
                    kosten ter vaststelling van de oorzaak en de omvang van de
                    schade, voor zover de vaststelling betrekking heeft op
                    schade in de zin van deze voorwaarden. • de eventuele
                    redelijke kosten gemaakt om de gebrekkige prestatie van IT
                    Context aan de overeenkomst te laten beantwoorden, voor
                    zover deze aan IT Context toegerekend kunnen worden •
                    redelijke kosten, gemaakt ter voorkoming of beperking van
                    schade, voor zover de Opdrachtgever aantoont dat deze kosten
                    hebben geleid tot beperking van directe schade als bedoeld
                    in dit artikel.
                    <br />
                    12.5 IT Context sluit iedere aansprakelijkheid uit voor
                    indirecte schade die geleden wordt door het gebruik van door
                    IT Context geleverde Diensten en/of Producten, met
                    uitzondering van situaties waarin de schade te wijten is aan
                    opzet aan de kant van IT Context. <br />
                    12.6 IT Context is in ieder geval nimmer aansprakelijk voor:
                    gevolgschade, schade door gemiste besparingen, schade door
                    bedrijfsstagnatie of gederfde winst en voor schade ontstaan
                    door verlies van datagegevens bij het uitvoeren van de
                    overeenkomst.
                </p>
                <h2>Artikel 13. Conformiteit </h2>

                <p>
                    13.1 IT Context zal bij de uitvoering van de overeenkomst
                    zoveel mogelijk het in de offerte overeengekomen beoogde
                    resultaat nastreven. Indien naar oordeel van de
                    Opdrachtgever de geleverde resultaten niet overeenkomen met
                    het in de offerte overeengekomen beoogde resultaat, zullen
                    de Opdrachtgever en IT Context in overleg treden om het
                    geleverde alsnog aan de beoogde resultaten te laten voldoen.
                    <br />
                    13.2 In aanvulling op hetgeen bepaald in artikel 13.1,
                    zullen de kosten voor het meerwerk als bedoeld in dat
                    artikel overeenkomstig het normale tarief van IT Context
                    worden gefactureerd aan de Opdrachtgever, tenzij de
                    Opdrachtgever naar inziens van IT Context aannemelijk kan
                    maken dat de afwijkingen in het resultaat te wijten zijn aan
                    de gebrekkige uitvoering van de overeenkomst aan de kant van
                    IT Context. <br />
                    13.3 Mocht vast komen te staan dat de gebrekkigheid van de
                    door IT Context te leveren Diensten en/of Producten voor
                    rekening komt van IT Context, heeft de Opdrachtgever geen
                    recht op schadevergoeding of ontbinding van de overeenkomst,
                    behoudens hetgeen bepaald in deze voorwaarden.
                </p>
                <h2>Artikel 14. Toepasselijk recht</h2>

                <p>
                    14.1 Op alle rechtsbetrekkingen waarbij IT Context partij
                    is, is uitsluitend het Nederlandse recht van toepassing.
                    <br />
                    14.2 De Opdrachtgever en IT Context zullen eventuele
                    geschillen eerst in onderleg overleg en in der minnen
                    proberen te schikken alvorens een beroep te doen op de
                    rechter. <br />
                    14.3 Indien dwingendrechtelijk regels niet anders bepalen is
                    in eerste instantie de kantonrechter te Utrecht bevoegd
                    kennis te nemen van geschillen. <br />
                    14.4 Indien enige bepaling van deze algemene voorwaarden
                    nietig is of vernietigd wordt, zullen de overige bepalingen
                    van deze algemene voorwaarden volledig van kracht blijven en
                    zullen IT Context en de Opdrachtgever in overleg treden
                    teneinde nieuwe bepalingen ter vervanging van de nietige
                    c.q. vernietigde bepalingen overeen te komen, waarbij zoveel
                    mogelijk het doel en de strekking van de nietige c.q.
                    vernietigde bepaling in acht worden genomen. <br />
                    14.5 Indien de Opdrachtgever in zijn opdracht bepalingen of
                    voorwaarden opneemt die afwijken van, of niet voorkomen in,
                    deze voorwaarden zijn deze voor IT Context alleen bindend
                    indien en voor zover deze door IT Context uitdrukkelijk
                    schriftelijk zijn aanvaard. <br />
                    14.6 Indien IT Context op eigen initiatief ten gunste van de
                    Opdrachtgever afwijkt van de Algemene Voorwaarden kunnen
                    daar door de Opdrachtgever nimmer enige rechten aan ontleend
                    worden. <br />
                    14.7 Eventuele inkoop- of andere voorwaarden van de
                    Opdrachtgever zijn niet van toepassing. <br />
                    14.8 Rechten en plichten voortvloeiende uit een Overeenkomst
                    kunnen slechts door de Opdrachtgever op een derden worden
                    overgedragen indien IT Context hier schriftelijk toestemming
                    voor heeft gegeven.
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
        text-align: center;
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
