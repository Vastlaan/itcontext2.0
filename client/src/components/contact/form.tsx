import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Button } from "../../styles";

interface FormProps {
    submitContactForm: (e: React.FormEvent<HTMLFormElement>) => void;
    warning: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form(props: FormProps) {
    const { submitContactForm, warning, setName, setEmail, setMessage } = props;
    const intl = useIntl();

    return (
        <Container onSubmit={submitContactForm}>
            <h1>
                {intl.formatMessage({
                    id: "contactFormHeaderMain",
                    defaultMessage: "Contact Formulier",
                })}
            </h1>
            <p>
                {intl.formatMessage({
                    id: "contactFormHeaderSub",
                    defaultMessage:
                        "Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, ik streef ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een van ons dienst? Vermeld dan het in onderstaand formulier:",
                })}
            </p>
            {warning ? <div>{warning}</div> : null}
            <Field>
                <label>
                    {intl.formatMessage({
                        id: "contactFormField1",
                        defaultMessage: "Naam",
                    })}
                </label>
                <input
                    name="contact_name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
            </Field>
            <Field>
                <label>
                    {intl.formatMessage({
                        id: "contactFormField2",
                        defaultMessage: "Email",
                    })}
                </label>
                <input
                    name="contact_email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Field>
            <Field>
                <label>
                    {intl.formatMessage({
                        id: "contactFormField3",
                        defaultMessage: "Bericht",
                    })}
                </label>
                <textarea
                    name="contact_msg"
                    maxLength={500}
                    required
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target?.value)
                    }
                ></textarea>
            </Field>
            <CustomButton type="submit">
                {intl.formatMessage({
                    id: "contactFormButton",
                    defaultMessage: "Versturen",
                })}
            </CustomButton>
        </Container>
    );
}

const Container = styled.form`
    flex: 0 0 60%;
    padding: 2rem;
    font-family: ${fonts.advent};

    h1 {
        font-size: 3.2rem;
        font-weight: 300;
        letter-spacing: 0.3rem;
        text-align: center;
        text-transform: uppercase;
        color: ${(props) => props.theme.grey};
    }
    p {
        margin: 2rem auto;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }
`;

const Field = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem auto;

    label {
        margin-right: 2rem;
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }

    input,
    textarea {
        width: 70%;
        padding: 1rem;
        font-family: ${fonts.cormoran};
        font-size: 1.8rem;
        border: 1px solid ${(props) => props.theme.primary};

        ${() => respond("l", "width: 50%;")}

        &:focus {
            outline: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
        }
    }
    textarea {
        height: 20rem;
    }
`;

const CustomButton = styled(Button)`
    display: flex;
    justify-content: center;
    margin: 2rem auto 5rem auto;
`;