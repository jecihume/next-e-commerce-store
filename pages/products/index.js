//this is my home!

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { myGlobalStyles } from '../../styles/globalStyles';
import { getLocalStorage, setLocalStorage } from '../../util/localStorage';

export default function Product(props) {
  const myDarkMode = getLocalStorage('darkMode') || false;

  const [darkMode, setDarkMode] = useState(myDarkMode);

  function clickHandler() {
    const newDarkMode = !getLocalStorage('darkMode');

    setLocalStorage('darkMode', newDarkMode);
    setDarkMode(newDarkMode);
  }

  return (
    <Layout>
      <Head>
        <title>Product Overview</title>
      </Head>

      <h2 className="h2">Product List</h2>
      <ul class="li">
        {props.productList.map((product) => {
          return (
            <li key={`product-li-${product.id}`}>
              {product.area}:
              <Link href={`/products/${product.id}`}>
                <a>{product.area}: have a look</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={clickHandler}>
        Dark Mode: {JSON.stringify(darkMode)}
      </button>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { products } = await import('../../util/database.js');

  // const mapIds = dragonEgg.map(egg)=>
  // {
  //   return {...dragonEgg, cart:true};
  // }

  // return  an object with the property props that's coming from the backend to the frontend
  // props : name and value
  console.log(context.req.cookies.cart);
  return {
    props: { productList: products },
  };
}
