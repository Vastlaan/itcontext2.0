import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../styles";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Contact() {
    interface DataToSend {
        name: string;
        email: string;
        message: string;
    }
    const contact = useRef();
    const intl = useIntl();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [warning, setWarning] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     const tl = gsap.timeline({
    //         paused: true,
    //         scrollTrigger: {
    //             trigger: contact.current,
    //             toggleActions: "restart none restart none",
    //         },
    //     });
    //     tl.fromTo(contact.current, 1, { opacity: 0 }, { opacity: 1 });
    // }, []);

    const submitContactForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !message) {
            return setWarning("Fields EMAIL and MESSAGE are required");
        }
        if (!isValidEmail(email)) {
            return setWarning("Email address is not valid");
        }
        const dataToSend: DataToSend = { name, email, message };

        //change hostname to /
        fetch("/api/submitContactForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data === "Sucess" || "Failed") {
                    console.log(data);
                    setDisplayConfirmation(true);
                }
            });
        setWarning("");
        // return e.target.reset();
    };
    const isValidEmail = (email: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return (
        <Container>
            {/* <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "navigationHome" })}
                    </Link>
                    {" > "}
                    <Link to="/contact">
                        {intl.formatMessage({ id: "contactNavCurrent" })}
                    </Link>
                </p>
            </Nav> */}
            <Main>
                <Form onSubmit={submitContactForm}>
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
                            onChange={(
                                e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => setMessage(e.target?.value)}
                        ></textarea>
                    </Field>
                    <Button>
                        <button type="submit">
                            {intl.formatMessage({
                                id: "contactFormButton",
                                defaultMessage: "Versturen",
                            })}
                        </button>
                    </Button>
                </Form>

                <Details id="klantenservice">
                    <h1>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderMain",
                            defaultMessage: "Klantenservice",
                        })}
                    </h1>
                    <h3>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderSub1",
                            defaultMessage: "IK BEN JE GRAAG VAN DIENST",
                        })}
                    </h3>
                    <p>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderSub2",
                            defaultMessage:
                                "Heb je een vraag voor mij? Neem gerust contact met mij op via de onderstaande contactgegevens.",
                        })}
                    </p>
                    <Box href="tel:0682307051">
                        <FiPhoneCall />
                        <p>06 82 30 70 51</p>
                    </Box>
                    <Box href="mailTo:info@itcontext.nl">
                        <FiMail />
                        <p>info@itcontext.nl</p>
                    </Box>
                </Details>
                {displayConfirmation ? (
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
                                id: "ontactConfirmation1",
                                defaultMessage:
                                    "Ik zal met u zo spoedig mogelijk contact opnemen",
                            })}
                        </h1>
                        <a
                            href="#"
                            onClick={() => setDisplayConfirmation(false)}
                        >
                            <span>Ok</span>
                        </a>
                    </Confirmation>
                ) : null}
            </Main>
        </Container>
    );
}
const Container = styled.section`
    // margin: 10rem 2rem;
    padding: 2rem;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;

    ${() => respond("l", "flex-direction: row;")}
`;
const Form = styled.form`
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

const Button = styled.div`
     display: flex;
    justify-content: center;
    margin: 2rem auto 5rem auto;

    button {
      border: none;
      border-radius: 5px;
      padding: 1rem 4rem;
      background-color: ${(props) => props.theme.secondary};
      color: white;
      font-familly: "Courier New", sans-serif;
      font-size: 2rem;
      letter-spacing:.2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
      }

      &:hover {
        background-color:  ${(props) => props.theme.secondaryLight};
      }
    }
  }
`;

const Details = styled.div`
    flex: 0 0 40%;
    padding: 2rem;
    font-family: ${fonts.advent};

    h1 {
        font-size: 2.8rem;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        color: ${(props) => props.theme.grey};
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        text-transform: lowercase;
        color: ${(props) => props.theme.grey};
    }
    p {
        margin: 1rem auto;
        font-family: ${fonts.cormoran};
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
    }
`;
const Box = styled.a`

    font-family: ${fonts.advent};
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid ${(props) => props.theme.secondary};
    transition: all 0.3s;

    
    &:hover {
      background-color: ${(props) => props.theme.bg};
      cursor: pointer;
    }
    

    svg {
      font-size: 3rem;
      color: ${(props) => props.theme.secondary};
    }
    p {
      font-size: 2.5rem;
      font-weight: 900;
      color: ${(props) => props.theme.grey};
    }
    div{
        flex: 0 0 70%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
  }
`;

const Confirmation = styled.div`
    font-family: ${fonts.advent};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;

    div {
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${(props) => props.theme.bg};
            font-size: 5rem;
            cursor: pointer;
        }
    }

    h1 {
        font-family: ${fonts.advent};
        font-size: 3rem;
        color: ${(props) => props.theme.bg};
    }

    a {
        margin-top: 2rem;
        color: ${(props) => props.theme.bg};
        border: 1px solid ${(props) => props.theme.bg};
        font-size: 2.2rem;
        text-decoration: none;
        padding: 1rem 2rem;
        cursor: pointer;
    }
`;
export default Contact;
