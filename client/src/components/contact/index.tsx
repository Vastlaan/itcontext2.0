import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import ReactGA from "react-ga";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { useIntl } from "react-intl";
//components
import Form from "./form";
import Details from "../details";
import Confirmation from "../confirmation";
import SEO from "../seo";

import { respond, PageNav } from "../../styles";

type TParams = { slug?: string };

function Contact({match}: RouteComponentProps<TParams>) {
    interface DataToSend {
        name: string;
        email: string;
        message: string;
    }
    // const contact = useRef();

    const subject = match.params
    const intl = useIntl();
    const [website, setWebsite] = useState(false)
    const [emailService, setEmailService] = useState(false)
    const [onlineMarketing, setOnlineMarketing] = useState(false)
    const [other, setOther] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [warning, setWarning] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    ReactGA.pageview("/contact");

    useEffect(()=>{
        if(subject.slug!){
            switch(subject.slug){
                case 'website-only':
                     setName('Website ontwerpen')
                    setWebsite(true)
                    setMessage('Ik ben geintereseerd in betaalbaar, op maat gemaakt website. Neem aub een contact met mij op! Groeten')
                    return 
                case 'website-combo':
                     setName('Website + e-mail + hosting aanbieding')
                    setWebsite(true)
                    setMessage('Ik ben geintereseerd in gratis Website met e-mail en hosting op server in Amsterdam. Neem aub een contact met mij op! Groeten')
                    return 
                case 'website-allin':
                     setName('All In Pakket aanvraag')
                    setWebsite(true)
                    setMessage('Ik ben geintereseerd in All In Pakket. Neem aub een contact met mij op! Groeten')
                    return 
                default:
                    setName('Informatie verzoek')
                    return
            }
        }
    },[])

    const submitContactForm = (e: any) => {
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
            body: JSON.stringify({ contactFormData: dataToSend }),
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

        return e.target.reset();
    };
    const isValidEmail = (email: string) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return (
        <Container>
            <SEO
                title="IT Context - Contact"
                description="IT Context is gevestigd in Purmerend. Mail Ons: info@itcontext.nl . Bel ons: 06 82 30 70 51 of bezoek onze website: http://itcontext.nl"
                url="https://itcontext.nl"
                imageUrl="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext-poster.jpg"
            />
            <PageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "contact.pagenav-home",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/contact">
                        {intl.formatMessage({
                            id: "contact.pagenav-current",
                            defaultMessage: "Contact",
                        })}
                    </Link>
                </p>
            </PageNav>
            <Main>
                <Form
                    setEmail={setEmail}
                    setName={setName}
                    message={message}
                    setMessage={setMessage}
                    warning={warning}
                    submitContactForm={submitContactForm}
                    website={website}
                    setWebsite={setWebsite}
                    onlineMarketing={onlineMarketing}
                    setOnlineMarketing={setOnlineMarketing}
                    emailService={emailService}
                    setEmailService={setEmailService}
                    other={other}
                    setOther={setOther}

                />

                <Details />
                {displayConfirmation && (
                    <Confirmation
                        setDisplayConfirmation={setDisplayConfirmation}
                        message1="contact.confirmation-1"
                        message2="contact.confirmation-2"
                    />
                )}
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

export default Contact;
