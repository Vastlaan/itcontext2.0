import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Button, Text } from "../../styles";

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
                    id: "contact.form-header-main",
                    defaultMessage: "Contact Formulier",
                })}
            </h1>
            <Text>
                {intl.formatMessage({
                    id: "contact.form-header-sub",
                    defaultMessage:
                        "Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, wij streven ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een van ons dienst? Vermeld dan het in onderstaand formulier:",
                })}
            </Text>
            {warning ? <div>{warning}</div> : null}
            <Field>
                <label>
                    {intl.formatMessage({
                        id: "contact.form-field-1",
                        defaultMessage: "Naam",
                    })}:
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
                        id: "contact.form-field-2",
                        defaultMessage: "E-mail",
                    })}:
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
                        id: "contact.form-field-3",
                        defaultMessage: "Bericht",
                    })}:
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
                    id: "contact.form-submit",
                    defaultMessage: "Versturen",
                })}
            </CustomButton>
        </Container>
    );
}

const Container = styled.form`
    flex: 0 0 60%;
    padding: 2rem;
    font-family: ${fonts.exo};

    h1 {
        font-size: 2.8rem;
        font-weight: 900;
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryLight};
        text-align: center;

        ${()=>respond('m','text-align: left;')}
    }
`;

const Field = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2rem auto;

    label {
        width: 10rem;
        text-align: right;
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
    margin: 2rem 0 5rem 12rem;
    padding: 1.5rem 5rem;
    font-size: 2.5rem;
`;
