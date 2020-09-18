import React from "react";
import Header from "./header";
import Portfolio from "./portfolio";
import Story from "./story";
import Reviews from "./reviews";

export default function Landing() {
    return (
        <main>
            <Header />
            <Portfolio />
            <Story />
            <Reviews />
        </main>
    );
}
