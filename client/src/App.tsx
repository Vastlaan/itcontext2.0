import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/navigation";
import Landing from "./components/landing";
import Footer from "./components/footer";
// styles
import { lightTheme, darkTheme, respond } from "./styles";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [ten, setTen] = useState({});

    const language = navigator.language.split(/[-_]/)[0]; // language without region code

    useEffect(() => {
        const fetchTranslation = async () => {
            const res = await fetch(
                "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/itcontext/translation-en.json"
            );
            const data = await res.json();

            setTen(data);
        };
        fetchTranslation();
    }, []);

    return (
        <div>
            <IntlProvider locale={language} messages={ten}>
                <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                    <GlobalStyle />
                    <Router>
                        <Nav />
                        <Switch>
                            <Route path="/" exact component={Landing} />
                        </Switch>
                        <Footer />
                    </Router>
                </ThemeProvider>
            </IntlProvider>
        </div>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        line-height: 1.6;
    }

    html{
        font-size: 50%;
        box-sizing: border-box;
        ${(props) => respond("s", `font-size:50%;`)}
        ${(props) => respond("m", `font-size:55%;`)}
        ${(props) => respond("l", `font-size:60%;`)}
        ${(props) => respond("xl", `font-size:62.5%;`)}
        ${(props) => respond("xxl", `font-size:100%;`)}
    }

    body{
        overflow-x: hidden;
    }
`;
