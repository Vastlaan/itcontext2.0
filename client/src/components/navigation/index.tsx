import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Logo from "./logo";
import Menu from "./menu";
import PhoneMenu from "./phoneMenu";
import Cta from "./cta";

interface NavProps {
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}
export default function Nav(props: NavProps) {
    const { setLanguage } = props;
    const intl = useIntl();

    return (
        <Container>
            <Logo />
            <Menu intl={intl} />
            <PhoneMenu intl={intl} />
            <Cta setLanguage={setLanguage} />
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
    padding: 0rem;
    display: flex;
    background-color: ${(props) => props.theme.greyDark};
    line-height: 1;
`;
