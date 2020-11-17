import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Card from "./card";
import { respond, fonts } from "../../../styles";

import { GiCheckedShield, GiTechnoHeart, GiChart } from "react-icons/gi";
import Image1 from "../../../img/image-card-1.jpg";
import Image2 from "../../../img/image-card-2.jpg";
import Image3 from "../../../img/image-card-3.jpg";

export default function Cards() {
    const intl = useIntl();

    return (
        <div>
            <Container>
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-11-btn",
                        defaultMessage: "beveiligde websites",
                    })}
                    link="/contact/website-only"
                    hovered={true}
                    image={Image1}
                    icon={<GiCheckedShield />}
                    header={intl.formatMessage({
                        id: "webdev.cards-11-header",
                        defaultMessage: "beveiligde websites",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-11-text",
                        defaultMessage:
                            "Onze websites maken gebruik van een beveiligd SSL-protocol, zodat de verbinding beschermd is tegen diefstal van gebruikersgegevens.",
                    })}
                    price={intl.formatMessage({
                        id: "webdev.cards-11-price",
                        defaultMessage: "beveiligde websites",
                    })}
                    period={intl.formatMessage({
                        id: "webdev.cards-11-period",
                        defaultMessage: "beveiligde websites",
                    })}
                />
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-22-btn",
                        defaultMessage: "meer over ons",
                    })}
                    link="/contact/website-combo"
                    hovered={false}
                    translate={"10%"}
                    icon={<GiTechnoHeart />}
                    image={Image3}
                    header={intl.formatMessage({
                        id: "webdev.cards-22-header",
                        defaultMessage: "nieuwste technologieën",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-22-text",
                        defaultMessage:
                            "We volgen wereldwijde trends en gebruiken de nieuwste en best werkende oplossingen",
                    })}
                    price={intl.formatMessage({
                        id: "webdev.cards-22-price",
                        defaultMessage: "beveiligde websites",
                    })}
                    period={intl.formatMessage({
                        id: "webdev.cards-22-period",
                        defaultMessage: "beveiligde websites",
                    })}
                />
                <Card
                    btn={intl.formatMessage({
                        id: "webdev.cards-33-btn",
                        defaultMessage: "marketing strategieën",
                    })}
                    link="/contact/website-allin"
                    hovered={false}
                    translate={"20%"}
                    icon={<GiChart />}
                    image={Image2}
                    header={intl.formatMessage({
                        id: "webdev.cards-33-header",
                        defaultMessage: "Klantenbestand uitbreiden",
                    })}
                    text={intl.formatMessage({
                        id: "webdev.cards-33-text",
                        defaultMessage:
                            "Ons doel is om uw publiek te vergroten, meer bezoekers te trekken en ze om te zetten in uw klanten.",
                    })}
                    price={intl.formatMessage({
                        id: "webdev.cards-33-price",
                        defaultMessage: "beveiligde websites",
                    })}
                    period={intl.formatMessage({
                        id: "webdev.cards-33-period",
                        defaultMessage: "beveiligde websites",
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
