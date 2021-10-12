import { Global } from '@emotion/react';
import Head from 'next/head';
import { myGlobalStyles } from '../styles/globalStyles.js';

// global styles is applied to everything underneath
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
