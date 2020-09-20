import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/navigation";
import Landing from "./components/landing";
import About from "./components/about";
import Contact from "./components/contact";
import Legal from "./components/legal";
import Marketing from "./components/marketing";
import Voorwaarden from "./components/voorwaarden";
import Webdev from "./components/webdev";
import Footer from "./components/footer";
import NotFound from "./components/not-found";
import ScrollToTop from "./components/scroll-to-top";
// translations
import En from "./translations/en.json";
import Nl from "./translations/nl.json";
// styles
import { lightTheme, darkTheme, respond } from "./styles";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [language, setLanguage] = useState("nl");
    const [ten, setTen] = useState({});

    // const language = navigator.language.split(/[-_]/)[0]; // language without region code

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
            <IntlProvider
                locale={language}
                messages={language === "en" ? En : Nl}
            >
                <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                    <GlobalStyle />
                    <Router>
                        <ScrollToTop />
                        <Nav setLanguage={setLanguage} />
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route path="/over-ons" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/cookies" exact component={Legal} />
                            <Route
                                path="/online-marketing"
                                exact
                                component={Marketing}
                            />
                            <Route
                                path="/website-ontwerpen"
                                exact
                                component={Webdev}
                            />
                            <Route
                                path="/algemene-voorwaarden"
                                exact
                                component={Voorwaarden}
                            />
                            <Route component={NotFound} />
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
        padding-top: 5.5rem;
    }
`;
