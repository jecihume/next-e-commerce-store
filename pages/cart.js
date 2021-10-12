import Head from 'next/head';
// import { getServerSideProps } from 'next';
import Layout from '../components/Layout';
import { getCookie, setCookie } from '../util/cookie';

export default function Cart() {
  const cartCookie = getCookie('cart');
  console.log(cartCookie);
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2>These are the Eggs of your Choosing.</h2>
    </Layout>
  );
}

// map function with products (like index)
