import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import { PageNav } from "../../styles";

export default function Marketing() {
    const intl = useIntl();

    return (
        <Container>
            <CustomPageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "webdev.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/website-ontwerpen">
                        {intl.formatMessage({
                            id: "webdev.pagenav-current",
                            defaultMessage: "Website Ontwerpen",
                        })}
                    </Link>
                </p>
            </CustomPageNav>

            <Header />
        </Container>
    );
}

const Container = styled.section``;
const CustomPageNav = styled(PageNav)`
    padding: 2rem 2rem 0rem 2rem;
`;
