import React, { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Logo from "./logo";
import Menu from "./menu";
import PhoneMenu from "./phoneMenu";
import Cta from "./cta";
import MobileMenu from "./mobileDropDownMenu";

interface NavProps {
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}
export default function Nav(props: NavProps) {
    const { setLanguage } = props;
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const intl = useIntl();

    return (
        <Container>
            <Logo />
            <Menu intl={intl} />
            <PhoneMenu intl={intl} />
            <Cta
                setLanguage={setLanguage}
                setDisplayMobileMenu={setDisplayMobileMenu}
            />
            <MobileMenu
                displayMobileMenu={displayMobileMenu}
                setDisplayMobileMenu={setDisplayMobileMenu}
            />
        </Container>
    );
}

const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0rem;
    display: flex;
    background-color: ${(props) => props.theme.greyDark};
    line-height: 1;
    z-index: 9;
`;
