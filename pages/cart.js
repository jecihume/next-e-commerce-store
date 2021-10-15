// import { getServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';
import Layout from '../components/Layout';
import { reactStrictMode } from '../next.config';
import { myGlobalStyles } from '../styles/globalStyles';
import { getCookie, setCookie } from '../util/cookie';

// cartCookie is showing me the array of objects that's in the cookie!
export default function Cart(props) {
  const cartCookie = getCookie('cart');

  console.log(props.cartArray);
  // console.log(cartCookie);

  // map over cartCookie {id, qty} output and create a new array showing the quantity and the chosen eggs:

  // This map function returns the quantities as numbers. But only the first time, afterwards, I get an error message!

  const eggsFromCookies = cartCookie.map(function (cartCookie) {
    return cartCookie['qty'];
  });
  console.log(`THESE ARE JUST QUANTITIES AS NUMBERS:${eggsFromCookies}`);

  // const eggsFromDatabase = () => (
  //   <div>
  //     <ul>{cartCookie.map(cartCookie => <li key={id}> {id} </li>)}</ul>
  //     </div>
  // );

  //   const eggsShownInCart = () => (
  //     <div>
  //     <ul>{cartCookie.map(cartCookie.id => <li key={id}> {id} </li>)}</ul>
  //     </div>
  // );

  return (
    <Layout>
      <Head>
        <title className="title">Shopping Cart</title>
      </Head>
      <h2 className="h2">These are the Eggs of your Choosing:</h2>
      <p>here go the items</p>
    </Layout>
  );
}

// first: render the cookie to the cart
// how to get the cookie? getServerSideProps???
// FROM COOKIES and PRODUCTS -> from these two arrays => superProducts (which // only contain products in the cart including qty!)
// superProducts are a mixture between cookies and products
// superProducts: frontend with props; render ONLY superProducts!!!!

//list of products from DB to serverside
//create a new array with products + qty based on cookie
// map function with products (like index)???
// STEP "2": getting products
export async function getServerSideProps(context) {
  const { products } = await import('../util/database');

  const getProducts = await products();

  const rawCookie = context.req.cookies.cart;
  console.log(rawCookie);
  const renderedCookie = rawCookie ? JSON.parse(rawCookie) : [];

  console.log(renderedCookie);

  const cartArray = renderedCookie.map((p) => {
    const cartObject = getProducts.find((prod) => prod.id === p.id);

    return {
      id: cartObject.id,
    };
  });

  return {
    props: { cartArray, products }, // will be passed to the page component as props
  };
}
