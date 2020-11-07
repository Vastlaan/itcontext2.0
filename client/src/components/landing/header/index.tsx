import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
//import Info from "./info";
import Bait from "./bait";
import { respond, fonts, Button, ButtonEmpty, Text } from "../../../styles";
import Img from '../../../img/header-landing.jpg'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Header() {

    const intl = useIntl();

    return (
        <Container>
            <Circles>

            </Circles>
            <Content>
                <h1>
                    {
                        intl.formatMessage({
                        id: "landing.header-main",
                        defaultMessage:
                            "IT Context helpt je bedrijf online te groeien",
                    }).split(' ').map((w,i,a)=>i!==(a.length-1)?<>{w} </>:<span key={i* 2.17}>{w} </span>)}
                </h1>
                <h3>
                    {intl.formatMessage({
                        id: "landing.header-2-text",
                        defaultMessage:
                            "We zorgen ervoor dat potentiële klanten je gemakkelijk kunnen vinden en bouwen een solide basis op om hen te helpen bij het kiezen van je producten en diensten.",
                    })}
                </h3>
                <Buttons>
                    <Button>Offerte</Button>
                    <ButtonEmpty>Contact</ButtonEmpty>
                </Buttons>
                <Social>
                    <h4>
                        {intl.formatMessage({
                            id: "landing.header-info-3",
                            defaultMessage: "Volg ons",
                        })}
                    </h4>
                    <div>
                        <a href="https://facebook.com">
                            <Icon>
                                <FaFacebookF />
                            
                            </Icon>
                        </a>
                        <a href="https://linkedin.com/company/it-context">
                            <Icon>
                            
                                <FaLinkedinIn/>
                            </Icon>
                        </a>
                    </div>
                </Social>
                
            </Content>
            <Info>

            </Info>
        </Container>
    );
}
const Container = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    ${() =>
        respond(
            "l",
            `grid-template-columns:  1fr 1fr;`
        )};
    
`;

const Circles = styled.div`
    position: absolute;
    bottom: 40%;
    right: 40%;
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    border: 1px solid ${p=>p.theme.primary};
    opacity: .3;
    z-index: 1;

    &::after {
        content: "";
        position: absolute;
        top: -20%;
        left: -20%;

        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 2px solid ${p=>p.theme.primary};
        opacity: .4;
    }
`;

const Content = styled.div`
    padding: 4.7rem 2.2rem;
    background-color: #CAF4FD;

    ${()=>respond('xxl','padding: 13.8rem;')}

    h1{
        font-family: ${fonts.headline};
        font-weight: 900;
        font-size: 4.7rem;
        color: ${p=>p.theme.primary};
        max-width: 40rem;
        line-height: 1;
        letter-spacing: -.2rem;

        span{
            font-weight: 800;
            line-height: 1;
            letter-spacing: -.2rem;
            color: ${p=>p.theme.primaryLight};
        }
    }
    h3{
        margin-top: 2.2rem;
        margin-bottom: 4.7rem;
        font-family: ${fonts.cormoran};
        font-weight: 300;
        font-size: 1.9rem;
        color: ${p=>p.theme.grey};
        max-width: 40rem;
        line-height: 1.3;
        letter-spacing: .2rem;
        padding-left: 2rem;
        position: relative;

        &:before{
            content: '';
            position: absolute;
            top:0;
            left: 0;
            height: 100%;
            width:.5rem;
            background-color: ${p=>p.theme.primaryLight};
            

        }
    }
    h4{
        font-family: ${fonts.cormoran};
        font-weight: 600;
        font-size: 1.9rem;
        color: ${p=>p.theme.primary};
        max-width: 40rem;
        line-height: 1.3;
        letter-spacing: .2rem;
    }
`
const Buttons = styled.div`
    margin-bottom: 4.7rem;
    button{
        margin-right: 2rem;
    }
`
const Social = styled.div`

    div{
        display: flex;
    }
`
const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${p=>p.theme.primary};
    border: 2px solid ${p=>p.theme.primary};
    margin: 1rem 1rem 1rem 0;
    transition: all .3s;

    &:hover{
        transform: scale(1.2);
    }

    svg{
        width: 3rem;
        height: 3rem;
        color: ${p=>p.theme.primary};
    }
`
const Info = styled.div`
    overflow-x: hidden;
    background-image: linear-gradient(to right, rgba(202, 244, 253,1),rgba(202, 244, 253,.1)), url(${Img});
    background-size: cover;
    background-repeat: no-repreat;
    background-position: center;
`
