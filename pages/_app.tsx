import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import Head from "next/head";   // 👈 correct import

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jumeirah     - Burj Al Arab </title>
        <meta name="description" content="Luxury Hotel Website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
