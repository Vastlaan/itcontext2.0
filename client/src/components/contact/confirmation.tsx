import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { Confirmation } from "../../styles";
import { MdClose } from "react-icons/md";

interface ConfirmationProps {
    setDisplayConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Conf(props: ConfirmationProps) {
    const { setDisplayConfirmation } = props;
    const intl = useIntl();
    return (
        <Confirmation>
            <div onClick={() => setDisplayConfirmation(false)}>
                <MdClose />
            </div>
            <h1>
                {intl.formatMessage({
                    id: "contactConfirmation1",
                    defaultMessage: "Bedankt voor uw bericht! .",
                })}
            </h1>
            <h1>
                {intl.formatMessage({
                    id: "contactConfirmation1",
                    defaultMessage:
                        "Ik zal met u zo spoedig mogelijk contact opnemen",
                })}
            </h1>
            <a href="#" onClick={() => setDisplayConfirmation(false)}>
                <span>Ok</span>
            </a>
        </Confirmation>
    );
}
