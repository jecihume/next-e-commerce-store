import { css, Global } from '@emotion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 10;
          }
        `}
      />
      <head>
        <link rel="icon" href="/favicon.jpeg" />
        {/* <title>Essos Dragon Eggs</title> */}
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
