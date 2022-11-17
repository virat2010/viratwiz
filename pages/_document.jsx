import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (<Html className="border-box">
    <meta name="description" content="A next js project hosted on https://github.com/virat2010/viratwiz"/>
    <link rel="icon" href="/favicon.ico"/>
    <Head/>
    <body>
        <Main/>
        <NextScript/>
    </body>
    </Html>);
}