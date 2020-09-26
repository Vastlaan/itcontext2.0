import React from "react";
import styled from "styled-components";
import Header from "./header";
import Review from "./review";
import Face1 from "../../../img/image-review-1.jpg";
import Face2 from "../../../img/image-review-2.jpg";

export default function Reviews() {
    return (
        <Container>
            <Header />
            <Review
                image={Face1}
                title="Mijn bedrijf eigen website"
                date="09-10-2020"
                stars={[1, 2, 3, 4]}
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt modi officia, voluptate molestias sapiente commodi
                voluptatum delectus amet odio consectetur veniam accusamus
                distinctio voluptatibus. Ex, deserunt! Animi dolores autem
                excepturi atque voluptatum deserunt officia, eos accusamus.
                Maxime magni, corrupti vero ipsum nostrum exercitationem.
                Voluptatem, vero assumenda aut quasi blanditiis eos.`}
            />
            <Review
                image={Face2}
                title="Professionele website"
                date="29-09-2020"
                stars={[1, 2, 3, 4, 5]}
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt modi officia, voluptate molestias sapiente commodi
                voluptatum delectus amet odio consectetur veniam accusamus
                distinctio voluptatibus. Ex, deserunt! Animi dolores autem
                excepturi atque voluptatum deserunt officia, eos accusamus.
                Maxime magni, corrupti vero ipsum nostrum exercitationem.
                Voluptatem, vero assumenda aut quasi blanditiis eos.`}
            />
        </Container>
    );
}

const Container = styled.section`
    margin-bottom: 10rem;
    padding: 2rem;
`;
