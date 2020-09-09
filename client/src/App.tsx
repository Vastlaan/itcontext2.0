import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// components
import Nav from "./components/navigation";
import Landing from "./components/landing";
// styles
import { lightTheme, darkTheme, respond } from "./styles";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <div>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Nav />
                <Landing />
            </ThemeProvider>
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
