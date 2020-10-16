import React from "react";
import { useIntl } from "react-intl";
import { Confirmation } from "../styles";
import { MdClose } from "react-icons/md";

interface ConfirmationProps {
    setDisplayConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
    message1?: string;
    message2?: string;
}

export default function Conf(props: ConfirmationProps) {
    const { setDisplayConfirmation, message1, message2 } = props;
    const intl = useIntl();
    return (
        <Confirmation>
            <div onClick={() => setDisplayConfirmation(false)}>
                <MdClose />
            </div>
            <h1>
                {intl.formatMessage({
                    id: `${message1}`,
                    defaultMessage: "Bedankt voor uw bericht!",
                })}
            </h1>
            <h1>
                {intl.formatMessage({
                    id: `${message2}`,
                    defaultMessage:
                        "Wij zullen met u zo spoedig mogelijk contact opnemen.",
                })}
            </h1>
            <button onClick={() => setDisplayConfirmation(false)}>
                <span>Ok</span>
            </button>
        </Confirmation>
    );
}
