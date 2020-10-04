import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
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
import Cookies from "./components/cookies";
import WhatsApp from "./components/whatsapp";
// translations
import En from "./translations/en.json";
import Nl from "./translations/nl.json";
// styles
import { lightTheme, darkTheme, respond } from "./styles";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [language, setLanguage] = useState("nl");
    const [cookies, setCookies] = useState({
        display: true,
        types: [
            {
                type: "necessary",
                allow: true, // always true
                components: [],
            },
            {
                type: "analitycs",
                allow: true, // always true
                components: [],
            },
            {
                type: "preferences",
                allow: true, // always true
                components: [],
            },
            {
                type: "marketing",
                allow: true, // always true
                components: [],
            },
        ],
    });

    useEffect(() => {
        ReactGA.initialize("UA-132849357-5");
        console.log("initialized");

        const cookiesPresets = window.localStorage.getItem("cookiesPresets");

        if (cookiesPresets) {
            const cookiesPresetsObject = JSON.parse(cookiesPresets);
            return setCookies(cookiesPresetsObject);
        }
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
                        {cookies.display ? (
                            <Cookies
                                cookiesState={cookies}
                                setCookies={setCookies}
                            />
                        ) : null}

                        <WhatsApp />
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
        font-size: 42%;
        box-sizing: border-box;
        ${(props) => respond("xs", `font-size:30%;`)}
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
