import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Button, Text } from "../../styles";

interface FormProps {
    submitContactForm: (e: React.FormEvent<HTMLFormElement>) => void;
    warning: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    website: boolean;
    setWebsite: React.Dispatch<React.SetStateAction<boolean>>;
    onlineMarketing: boolean;
    setOnlineMarketing: React.Dispatch<React.SetStateAction<boolean>>;
    emailService: boolean;
    setEmailService: React.Dispatch<React.SetStateAction<boolean>>;
    other: boolean;
    setOther: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form(props: FormProps) {
    const { submitContactForm, warning, setName, setEmail, message, setMessage,website, setWebsite, onlineMarketing, setOnlineMarketing, emailService, setEmailService, other,setOther } = props;
    const intl = useIntl();

     const content = useRef<HTMLFormElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0,duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content} onSubmit={submitContactForm}>
            <h1>
                {intl.formatMessage({
                    id: "contact.form-header-main",
                    defaultMessage: "Contact Formulier",
                })}
            </h1>
            <Text style={{textAlign: 'left'}}>
                {intl.formatMessage({
                    id: "contact.form-header-sub",
                    defaultMessage:
                        "Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, wij streven ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een van ons dienst? Vermeld dan het in onderstaand formulier:",
                })}
            </Text>
            {warning ? <div>{warning}</div> : null}

            <h3>Waar kunnen wij u mee helpen?</h3>

            <Field>
                <input type="checkbox" name='service' checked={website} onChange={()=>setWebsite(prevState=>!prevState)} />
                <label htmlFor="service">Websites</label>
            </Field>
            <Field>
                <input type="checkbox" name='service'/>
                <label htmlFor="service">Online Marketing</label>
            </Field>
            <Field>
                <input type="checkbox" name='service'/>
                <label htmlFor="service">SEO</label>
            </Field>
            <Field>
                <input type="checkbox" name='service'/>
                <label htmlFor="service">Andere reden</label>
            </Field>

            <h3>Wat is jouw vraag?</h3>    
            <Field2>
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
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target?.value)
                    }
                ></textarea>
            </Field2>
            
            <h3>Wat is jouw e-mailadres?</h3>

            <Field2>
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
            </Field2>
             
                
                

            {/* <Field>
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
            </Field> */}
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
        font-size: 3.3rem;
        font-weight: 900;
        text-transform: uppercase;
        color: ${(props) => props.theme.primary};
        text-align: left;

        ${()=>respond('m','text-align: left;')}
    }
    h3{
        font-family: ${fonts.headline};
        font-size: 2.2rem;
        font-weight: 600;
        color: ${p=>p.theme.primary};
        margin-top: 2.7rem;
    }
`;

const Field = styled.div`
   
    width:100%;
    display:flex;
    align-items: center;
    

    label {
        
        text-align: left;
        margin-left: 2rem;
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }

    input,
    textarea {
        padding: 1rem;
        font-family: ${fonts.cormoran};
        font-size: 1.8rem;
        border: 1px solid ${(props) => props.theme.primary};

        ${() => respond("l", "")}

        &:focus {
            outline: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
        }
    }
    textarea {
        height: 10rem;
        width: 70%;
    }
`;

const Field2 = styled(Field)`
    flex-direction: column;
    align-items: flex-start;

    label{
        margin-left: 0rem;
    }
`

const CustomButton = styled(Button)`
    display: flex;
    justify-content: center;
    margin: 2.7rem 0;
    background-color: ${p=>p.theme.fresh};
    border: 1px solid ${p=>p.theme.fresh};

    &:hover{
        color: ${p=>p.theme.fresh};
    }
`;
