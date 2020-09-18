import React from "react";
import Header from "./header";
import Portfolio from "./portfolio";
import Responsive from "./responsive";
import Reviews from "./reviews";
import Ux from "./ux";
import Intersection from "../intersection";

export default function Landing() {
    return (
        <main>
            <Header />
            <Responsive />
            <Portfolio />
            <Intersection
                headline={"we make usage of the newest tools"}
                text={
                    "Our technology allows your website to be accessible from various devices, load fast and rank your business higher in the search engines results"
                }
            />

            <Reviews />
            <Ux />
        </main>
    );
}
