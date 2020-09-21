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
                    btn="read more"
                    link="/online-marketing"
                    hovered={true}
                    image={Image1}
                    icon={<GiCheckedShield />}
                    header="secure environment"
                    text="Our websites are force to use encrypted protocols so that connection is safe and all the users data are protected. "
                />
                <Card
                    btn="read more"
                    link="/online-marketing"
                    hovered={false}
                    translate={"10%"}
                    icon={<GiTechnoHeart />}
                    image={Image3}
                    header="newest technologies"
                    text="We follow global trends and use newest, best working solutions"
                />
                <Card
                    btn="read more"
                    link="/online-marketing"
                    hovered={false}
                    translate={"20%"}
                    icon={<GiChart />}
                    image={Image2}
                    header="Grow customers base"
                    text="Our goal is to increase your audience, drag more visitors and convert them in your customers."
                />
            </Container>
            <Container>
                <Card
                    btn="read more"
                    link="/online-marketing"
                    hovered={false}
                    image={Image1}
                    icon={<GiCheckedShield />}
                    header="secure environment"
                    text="Our websites are force to use encrypted protocols so that connection is safe and all the users data are protected. "
                />
                <Card
                    btn="read more"
                    link="/online-marketing"
                    hovered={true}
                    translate={"10%"}
                    icon={<GiTechnoHeart />}
                    image={Image3}
                    header="newest technologies"
                    text="We follow global trends and use newest, best working solutions"
                />
                <Card
                    btn="read more"
                    link="/online-marketing"
                    hovered={false}
                    translate={"20%"}
                    icon={<GiChart />}
                    image={Image2}
                    header="Grow customers base"
                    text="Our goal is to increase your audience, drag more visitors and convert them in your customers."
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
