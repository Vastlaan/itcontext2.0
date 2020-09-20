import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { respond, fonts } from "../../../styles";

export default function Cards() {
    const intl = useIntl();

    return <Container>Cards</Container>;
}

const Container = styled.section`
    margin: 20rem auto;
    width: 100%;

    ${() => respond("m", "width: 90%;")}
`;
