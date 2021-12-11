import React from 'react';
import Head from "next/head";

const AppHead = ({ title }) => {
    const titleText = `Fatmedium | ${title}`
    return (
        <Head>
            <title>{titleText}</title>
            <meta name="author" content="Kresno Fatih Imani" />
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon-32x32.png"/>
        </Head>
    );
};

export default AppHead;