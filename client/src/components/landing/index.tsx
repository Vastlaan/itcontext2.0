import React from "react";
import Header from "./header";
import Portfolio from "./portfolio";
import Story from "./story";
import Reviews from "./reviews";
import Intersection from "../intersection";

export default function Landing() {
    return (
        <main>
            <Header />
            <Portfolio />
            <Intersection
                headline={"we make usage of the newest tools"}
                text={
                    "Our technology allows your website to be accessible from various devices, load fast and rank your business higher in the search engines results"
                }
            />
            <Story />
            <Reviews />
        </main>
    );
}
