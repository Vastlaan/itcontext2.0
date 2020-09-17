import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { useIntl } from "react-intl";
//components
import Form from "./form";
import Details from "./details";
import Confirmation from "./confirmation";
import { fonts, respond, Anchor, Button, PageNav } from "../../styles";

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
            <PageNav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({
                            id: "navigationHome",
                            defaultMessage: "Voorpagina",
                        })}
                    </Link>
                    {" > "}
                    <Link to="/contact">
                        {intl.formatMessage({
                            id: "contactNavCurrent",
                            defaultMessage: "Contact",
                        })}
                    </Link>
                </p>
            </PageNav>
            <Main>
                <Form
                    setEmail={setEmail}
                    setName={setName}
                    setMessage={setMessage}
                    warning={warning}
                    submitContactForm={submitContactForm}
                />

                <Details />
                {displayConfirmation ? (
                    <Confirmation
                        setDisplayConfirmation={setDisplayConfirmation}
                    />
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

export default Contact;
