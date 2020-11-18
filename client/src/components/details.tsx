import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { useIntl } from "react-intl";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { AiOutlineForm} from "react-icons/ai";
import { fonts, Anchor, Anchor2, Text, respond } from "../styles";

export default function Details() {
    const intl = useIntl();
     const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0,duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content} id="klantenservice">
            <h1>
                {intl.formatMessage({
                    id: "contact.details-header-main",
                    defaultMessage: "Klantenservice",
                })}
            </h1>
            <h3>
                {intl.formatMessage({
                    id: "contact.details-header-sub-1",
                    defaultMessage: "WIJ ZIJN JE GRAAG VAN DIENST",
                })}
            </h3>
            <Text style={{margin: '2rem 0', textAlign: 'left'}}>
                {intl.formatMessage({
                    id: "contact.details-header-sub-2",
                    defaultMessage:
                        "Heb je een vraag voor ons? Neem gerust contact met ons op via de onderstaande contactgegevens.",
                })}
            </Text>
            <Anchor color="#117864" href="tel:0299705072">
                <FiPhoneCall />
                <span>0299 70 50 72</span>
            </Anchor>
            <Anchor color="#006A93" href="mailTo:info@itcontext.nl">
                <FiMail />
                <span>info@itcontext.nl</span>
            </Anchor>
            
            <Link style={{textDecoration: 'none'}} to='/offerte-aanvragen'>
                <Anchor2 color="#0F284E">
                    <AiOutlineForm />
                    <span>
                        {intl.formatMessage({
                        id: "navigation.menu-5",
                        defaultMessage:
                            "Offerte",
                    })}</span>
                </Anchor2>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    flex: 0 0 40%;
    padding: 2rem;
    font-family: ${fonts.exo};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${()=>respond('m','text-align: left;')}

    h1 {
        font-size: 3.3rem;
        font-weight:900;
        
        text-transform: uppercase;
        color: ${(props) => props.theme.primary};
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        
        text-transform: lowercase;
        color: ${(props) => props.theme.grey};
    }
`;
