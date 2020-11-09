import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Content from './content'
import Info from './info'
import { respond } from "../../../styles";
import Img from '../../../img/header-landing.jpg'

export default function Header() {

    const intl = useIntl();

    return (
        <Container>

            <Content/>
            <Info/>
            
        </Container>
    );
}


const Container = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    background-image: linear-gradient(to right, rgba(202, 244, 253,1),rgba(202, 244, 253,.1)), url(${Img});

    ${() =>
        respond(
            "l",
            `grid-template-columns:  1fr 1fr;`
        )};
    
`;






