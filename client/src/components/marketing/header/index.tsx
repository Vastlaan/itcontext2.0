import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from "styled-components";
import { useIntl } from "react-intl";
import Image from '../../../img/header-marketing.jpg'
import { respond, fonts, Button, Text} from "../../../styles";

export default function Header() {

    const intl = useIntl()

    const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    function scrollDown() {
        return window.scrollTo({
            top: 600,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <Container ref={content}>
            <Head>
                    {intl.formatMessage({
                        id: "marketing.header-header-1",
                        defaultMessage: "",
                    }).split(' ').map((w,i,a)=>i!==(a.length-1)?<strong key={i* 2.17}>{w} </strong>:<span key={i* 2.17}>{w} </span>)}
                </Head>
                <Head>
                    {intl.formatMessage({
                        id: "marketing.header-header-2",
                        defaultMessage: "",
                    })}
                </Head>
                <CustomText>
                    {intl.formatMessage({
                        id: "marketing.header-text",
                        defaultMessage:
                            "Een goede marketingstrategie vereist een solide plan, dat kan verschillen afhankelijk van: scope - het verkeer waarop je je concentreert; technologieën - tools die je gaat gebruiken; budget - de tijd en kosten die je bereid bent te besteden. IT Context helpt je bij het kiezen van de beste oplossingen die aan jouw wensen en eisen voldoen.",
                    })}
                </CustomText>
                <CustomButton onClick={scrollDown}>
                    {intl.formatMessage({
                        id: "marketing.header-btn-m",
                        defaultMessage: "Lees meer",
                    })}
                </CustomButton>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    min-height: 50rem;
    margin: 0rem auto;
    padding: 4.7rem 2.2rem;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, rgba(255,255,255,1) 50%,rgba(255,255,255,.1)), url(${Image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    ${() => respond("l", "min-height: 60rem; padding: 4.7rem;")}
    ${() => respond("xxl", "min-height: 60rem; padding: 13.8rem;")}
`;

const Head = styled.h1`
    color: ${(p)=>p.theme.primary};
    font-size: 6rem;
    font-weight: 900;
    font-family: ${fonts.exo};
    letter-spacing: -.1rem;
    line-height: 1;

    span{
        font-weight: 800;
        line-height: 1;
        letter-spacing: -.2rem;
        color: ${p=>p.theme.primaryLight};
        
    }
    strong{
        font-weight: 900;
        font-size: 6rem;
        line-height: 1;
    }

    ${()=>respond('xxl','font-size: 6rem;')}
`;
const CustomText = styled(Text)`
    max-width: 60rem;
    text-align: left;
    margin: 3rem 0;
    color: ${(p)=>p.theme.grey};
`;
const CustomButton = styled(Button)`
    align-self: flex-start;
    margin: 5rem 0;
   
`;
