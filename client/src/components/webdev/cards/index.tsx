import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Card from "./card";
import { respond, fonts } from "../../../styles";

import { GiCheckedShield, GiTechnoHeart, GiChart } from "react-icons/gi";
import Image1 from "../../../img/image-card-1.png";
import Image2 from "../../../img/image-card-2.png";
import Image3 from "../../../img/image-card-3.png";

export default function Cards() {
    const intl = useIntl();

    return (
        <div>
            <Container>
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-1-btn",
                        defaultMessage: "beveiligde websites",
                    })}
                    link="/website-ontwerpen"
                    hovered={true}
                    image={Image1}
                    icon={<GiCheckedShield />}
                    header={intl.formatMessage({
                        id: "webdev.cards-1-btn",
                        defaultMessage: "beveiligde websites",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-1-text",
                        defaultMessage:
                            "Onze websites zijn gedwongen om gebruik te maken van beveiligd SSL-protocol, zodat de verbinding beschermd tegen diefstal van gebruikersgegevens.",
                    })}
                />
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-2-btn",
                        defaultMessage: "meer over ons",
                    })}
                    link="/over-ons"
                    hovered={false}
                    translate={"10%"}
                    icon={<GiTechnoHeart />}
                    image={Image3}
                    header={intl.formatMessage({
                        id: "webdev.cards-2-header",
                        defaultMessage: "nieuwste technologieën",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-2-text",
                        defaultMessage:
                            "We volgen wereldwijde trends en gebruiken de nieuwste, best werkende oplossingen",
                    })}
                />
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-3-btn",
                        defaultMessage: "marketing strategieën",
                    })}
                    link="/online-marketing"
                    hovered={false}
                    translate={"20%"}
                    icon={<GiChart />}
                    image={Image2}
                    header={intl.formatMessage({
                        id: "webdev.cards-3-header",
                        defaultMessage: "Klantenbestand uitbreiden",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-3-text",
                        defaultMessage:
                            "Ons doel is om uw publiek te vergroten, meer bezoekers te trekken en ze om te zetten in uw klanten.",
                    })}
                />
            </Container>
        </div>
    );
}

const Container = styled.section`
    margin: 10rem auto 20rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    ${() => respond("m", "width: 90%; flex-direction: row;")}
`;
