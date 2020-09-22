import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fonts, PageNav } from "../../styles";
import { useIntl } from "react-intl";
import Cards from "./cards";
import Paragraph from "../paragraph";
import Intersection from "../intersection";
import InfoStrip from "../infoStrip";
import Header from "./header";
import { FaHandshake } from "react-icons/fa";

export default function Webdev() {
    const intl = useIntl();

    return (
        <Container>
            <Header />
            <InfoStrip
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?"
                btn="Find your solution"
                note="with IT Context"
                icon={<FaHandshake />}
            />
            <Cards />

            <Paragraph
                heading="ipsum dolor sit"
                para1="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?"
                para2="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapien?"
                para3="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?"
            />
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
            <Paragraph
                heading="ipsum dolor sit"
                para1="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?"
                para2="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapien?"
                para3="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus autem veritatis numquam, quidem obcaecati doloremque
                soluta eveniet. Harum sapiente impedit illo distinctio non
                error. Iure provident eos illo totam?"
            />
        </Container>
    );
}

const Container = styled.main``;
