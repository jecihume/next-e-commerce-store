//this is my home!
import { get } from 'http';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getLocalStorage, setLocalStorage } from '../../util/localstorage';

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

      <h2>Product List</h2>
      <ul>
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
export async function getServerSideProps() {
  const { products } = await import('../../util/database.js');

  // return  an object with the property props that's coming from the backend to the frontend
  // props : name and value
  console.log(products);
  return {
    props: { productList: products },
  };
}
