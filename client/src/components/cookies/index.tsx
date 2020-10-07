import React, { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { fonts, respond } from "../../styles";
import { FaCookieBite } from "react-icons/fa";

interface CookiesProps {
    setCookies: React.Dispatch<
        React.SetStateAction<{
            display: boolean;
            types: { type: string; allow: boolean; components: never[] }[];
        }>
    >;
    cookiesState: {
        display: boolean;
        types: { type: string; allow: boolean; components: never[] }[];
    };
}

export default function CookiesStatement(props: CookiesProps) {
    const { cookiesState, setCookies } = props;

    const intl = useIntl();

    const [necessary, setNecessary] = useState(true);
    const [analitycs, setAnalitycs] = useState(true);
    const [preferences, setPreferences] = useState(false);
    const [marketing, setMarketing] = useState(false);

    const allowAll = () => {
        let cookies = cookiesState;
        cookies.display = false;
        cookies.types.forEach((each) => {
            each.allow = true;
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets!);
        return setCookies(cookiesPresetsObject);
    };

    const allowSelected = () => {
        let cookies = cookiesState;
        cookies.display = false;
        cookies.types.forEach((each) => {
            if (each.type === "necessary") {
                return (each.allow = necessary);
            }
            if (each.type === "analitycs") {
                return (each.allow = analitycs);
            }
            if (each.type === "preferences") {
                return (each.allow = preferences);
            }
            if (each.type === "marketing") {
                return (each.allow = marketing);
            }
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets!);
        return setCookies(cookiesPresetsObject);
    };
    const allowNecessary = () => {
        let cookies = cookiesState;
        cookies.display = false;
        cookies.types.forEach((each) => {
            if (each.type === "necessary") {
                return (each.allow = necessary);
            } else {
                return (each.allow = false);
            }
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets!);
        return setCookies(cookiesPresetsObject);
    };

    return (
        <Cookies>
            <Statement>
                <Icon>
                    <FaCookieBite />
                </Icon>

                <Info>
                    <h3>
                        {intl.formatMessage({ id: "cookies.statement-header" })}
                    </h3>
                    <p>
                        {intl.formatMessage({ id: "cookies.statement-text" })}
                    </p>
                </Info>
            </Statement>
            <Selections>
                <div>
                    <label htmlFor="necessary">Necessary</label>
                    <input
                        type="checkbox"
                        id="necessary"
                        name="necessary"
                        checked={necessary}
                        onChange={() => setNecessary(true)}
                    />
                </div>
                <div>
                    <label htmlFor="analitycs">Analytics</label>
                    <input
                        type="checkbox"
                        id="analitycs"
                        name="analitycs"
                        checked={analitycs}
                        onChange={() => setAnalitycs(true)}
                    />
                </div>
                <div>
                    <label htmlFor="preferences">Preferences</label>
                    <input
                        type="checkbox"
                        id="preferences"
                        name="preferences"
                        checked={preferences}
                        onChange={() =>
                            setPreferences((prevState) => !prevState)
                        }
                    />
                </div>
            </Selections>
            <Buttons>
                <button
                    style={{ backgroundColor: "#f6f9ff" }}
                    onClick={allowNecessary}
                >
                    Allow only necessary cookies
                </button>
                <button
                    style={{ backgroundColor: "#f6f9ff" }}
                    onClick={allowSelected}
                >
                    Allow selected cookies
                </button>
                <button
                    style={{
                        backgroundColor: "#117864",
                        color: "snow",
                    }}
                    onClick={allowAll}
                >
                    Allow all cookies
                </button>
            </Buttons>
            <ReadMore>
                <Link to="/cookies">Read more about cookies</Link>
            </ReadMore>
        </Cookies>
    );
}

const Cookies = styled.section`
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 55vh;
    border: 3px solid ${(p) => p.theme.secondary};
    background-color: ${(p) => p.theme.bg};
    overflow: scroll;
    scrollbar-width: none;
    z-index: 11;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Statement = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Icon = styled.div`
    padding: 3rem;
    color: ${(p) => p.theme.warm};
    font-size: 5rem;
`;
const Info = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    h3 {
        font-family: ${fonts.advent};
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    p {
        font-family: ${fonts.cormoran};
        font-size: 2rem;
    }
`;
const Selections = styled.div`
    display: flex;
    padding: 1rem;
    margin: 1rem;
    flex-direction: column;
    align-items: center;

    ${() =>
        respond("l", "flex-direction: row; justify-content: space-around;")};

    div {
        border: 1px solid ${(p) => p.theme.grey};
        margin: 0.5rem;
        padding: 0.5rem;
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
            font-size: 1.6rem;
            margin-right: 1rem;
        }
    }
`;
const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    ${() => respond("l", "flex-direction: row; justify-content: space-around;")}

    button {
        width: 30rem;
        margin: 1rem;
        padding: 0.5rem 1.5rem;
        border: 1px solid ${(p) => p.theme.greyDark};
        color: ${(p) => p.theme.greyDark};
        background-color: ${(p) => p.theme.bg};
        cursor: pointer;
        font-family: ${fonts.cormoran};
        font-size: 2rem;

        &::active,
        ::focus {
            outline: none;
        }
        &::hover {
        }
    }
`;

const ReadMore = styled.div`
    margin: 1rem;
    padding: 1rem;

    a {
        color: ${(p) => p.theme.greyDark};
        text-decoration: none;
        cursor: pointer;
        font-family: ${fonts.advent};
        font-size: 2rem;
        font-weight: 400;
    }
`;
