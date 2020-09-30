import React from "react";
import { Helmet } from "react-helmet";

interface HelmetProps {
    title?: string;
    description?: string;
    url?: string;
    imageUrl?: string;
}

export default function SEO(props: HelmetProps) {
    const { title, description, url, imageUrl } = props;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <link rel="cannonical" href={url} />

            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="article" />

            <meta property="og:title" content={title} />

            <meta property="og:description" content={description} />

            <meta property="og:image" content={imageUrl} />

            <meta property="og:url" content={url} />

            <meta property="og:site_name" content="IT Context" />

            <meta name="twitter:title" content={title} />

            <meta name="twitter:description" content={description} />

            <meta name="twitter:image" content={imageUrl} />

            <meta name="twitter:site" content="" />

            <meta name="twitter:creator" content="" />
        </Helmet>
    );
}
