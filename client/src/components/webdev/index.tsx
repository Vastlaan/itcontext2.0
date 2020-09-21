import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav } from "../../styles";
import { useIntl } from "react-intl";
import Cards from "./cards";
import Intersection from "../intersection";
import Header from "./header";

export default function Webdev() {
    const intl = useIntl();

    return (
        <Container>
            <Header />
            <Cards />
            <Intersection
                headline={intl.formatMessage({
                    id: "webdev.intersection1-headline",
                    defaultMessage: "Voor elk bedrijf dat online wil groeien",
                })}
                text={intl.formatMessage({
                    id: "webdev.intersection1-text",
                    defaultMessage:
                        "Onze doel is om betaalbaar, goede kwaliteit websites aan allerlei ondernemingen te leveren. Met eigen e-mailadres, SEO plan en Content Manager System.",
                })}
                background={false}
            />
        </Container>
    );
}

const Container = styled.main``;
