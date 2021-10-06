import { Global } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer.js';
import { Header } from '../components/Header.js';
import { myGlobalStyles } from '../styles/globalStyles.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={myGlobalStyles} />

      <Head>
        <link rel="icon" href="/favicon.jpeg" />
        <title>Essos Dragon Eggs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
