import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Ritual V4</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  );
}

export default MyApp;
