import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../styles";
import Header from "./header";

export default function About() {
    return (
        <Container>
            <Header />
        </Container>
    );
}
const Container = styled.section``;
