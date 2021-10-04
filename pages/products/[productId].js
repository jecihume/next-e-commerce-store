import head from 'next/head';
import { useRouter } from 'next/router';
import { userInfo } from 'os';
import Layout from '../../components/Layout';

export default function product(props) {
  // this is only used, when I am grabbing information from the front end through the URl:
  // const router = useRouter();
  // const { product } = router.query;

  if (typeof window !== 'undefined') {
    console.log(window.localStorage);
  }

  return (
    <Layout>
      <head>
        <title>Product Detail: {props.dragonEgg.color}</title>
      </head>
      <div>Product Detail: {props.dragonEgg.area}</div>
      <div>The color of this Dragon will be {props.dragonEgg.color}.</div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');

  // the property that comes after the query object is the name of the file we're in!
  const idFromUrl = context.query.productId;

  // products is an array of products, egg represents one object
  const dragonEgg = products.find((egg) => {
    return idFromUrl === egg.id;
  });

  // return  an object with the property props that's coming from the backend to the frontend
  // props : name and value
  console.log(products);
  return {
    props: { dragonEgg },
  };
}
