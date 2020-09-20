import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav } from "../../styles";
import { useIntl } from "react-intl";
import Cards from "./cards";

import Header from "./header";

export default function Webdev() {
    return (
        <Container>
            <Header />
            <Cards />
        </Container>
    );
}

const Container = styled.main``;
