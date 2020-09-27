import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, Button, respond } from "../../../styles";

export default function Info() {
    return (
        <Container>
            <h1>Some motherfucking heading</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                saepe numquam architecto doloremque possimus eveniet hic
                accusamus adipisci explicabo natus!
            </p>
            <Button style={{ margin: "2rem 0" }}>Button</Button>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
`;
