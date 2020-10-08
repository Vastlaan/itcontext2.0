import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiHeart2Fill } from "react-icons/ri";
import { fonts, respond } from "../../styles";

export default function Copyright() {
    const intl = useIntl();

    return (
        <Container>
            <Year>
                &copy; {new Date().getFullYear()}{" "}
                {intl.formatMessage({
                    id: "footer.copyright-rights",
                    defaultMessage: "Alle rechten voorbehouden",
                })}{" "}
            </Year>
            <Credits>
                <p>
                    {intl.formatMessage({
                        id: "footer.copyright-credits",
                        defaultMessage: "Ontworpen met",
                    })}
                </p>
                <RiHeart2Fill />
                <p>
                    by <Link to="/">IT Context</Link>
                </p>
            </Credits>
            <Numbers>
                <p>Kvk: 80486487</p>
                <p>Btw-id: NL003444998B74</p>
            </Numbers>
        </Container>
    );
}

const Container = styled.div`
    padding: 1rem 2rem;
    border-top: 1px solid ${(props) => props.theme.grey};
    color: snow;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 2rem;
    font-family: ${fonts.advent};

    ${() => respond("m", "justify-content: space-between;")}
`;
const Year = styled.p``;
const Credits = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 2rem;
        font-family: ${fonts.advent};

        a {
            text-decoration: none;
            color: snow;
        }
    }
    svg {
        font-size: 2rem;
        color: ${(props) => props.theme.warm};
        margin: 0 1rem;
    }
`;
const Numbers = styled.div`
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${respond("m", "justify-content: space-between; flex-direction: row;")}
`;
