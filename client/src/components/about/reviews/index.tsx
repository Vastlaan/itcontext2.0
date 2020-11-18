import React, {useEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useIntl } from "react-intl";
import styled from "styled-components";
import Header from "./header";
import Review from "./review";
import Face1 from "../../../img/image-review-1.jpg";
import Face2 from "../../../img/image-review-2.jpg";

export default function Reviews() {
    const intl = useIntl();
    const content = useRef<HTMLDivElement>(null)
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(content.current!, {opacity: 0,y:100, duration: 1, scrollTrigger: {trigger: content.current!, toggleActions: "restart none none none",}})
    },[])

    return (
        <Container ref={content}>
            <Header />
            <Review
                image={Face1}
                title={intl.formatMessage({
                    id: "about.reviews-opinion-1-head",
                    defaultMessage: "Zeer betaalbaar en professioneel",
                })}
                date="09-10-2020"
                stars={[1, 2, 3, 4]}
                text={intl.formatMessage({
                    id: "about.reviews-opinion-1-text",
                    defaultMessage:
                        "Ik leer dit bedrijf kennen als toegewijde specialisten. Michal bezit van goede commucative vaardigheden (als voor anderstaligen) en hij geeft waardevolle adviezen over het functioneren van de websites in het algemeen en marketingstrategieën waar ik nog nooit van gehoord heb.",
                })}
            />
            <Review
                image={Face2}
                title={intl.formatMessage({
                    id: "about.reviews-opinion-2-head",
                    defaultMessage: "Vriendelijke mensen en mooi resultaat",
                })}
                date="29-09-2020"
                stars={[1, 2, 3, 4, 5]}
                text={intl.formatMessage({
                    id: "about.reviews-opinion-2-text",
                    defaultMessage:
                        "Ik raad dit bedrijf zeker aan, ze zijn betrokken, zorgen voor dat elke detail van de website een juiste plek en bedoeling heeft. Voor deze prijs ben ik heel tevreden met de resultaat. Top!",
                })}
            />
        </Container>
    );
}

const Container = styled.section`
    margin-bottom: 10rem;
    padding: 2rem;
`;
