import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Product(props) {
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
