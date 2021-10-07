import { captureRejectionSymbol } from 'events';
import head from 'next/head';
import { useRouter } from 'next/router';
import { userInfo } from 'os';
import Layout from '../../components/Layout';

const product = (props) => {
  // or like this: export default function product(props) {
  // this is only used, when I am grabbing information from the front end through the URl:
  // const router = useRouter();
  // const { product } = router.query;

  if (typeof window !== 'undefined') {
    console.log(window.localStorage);
  }

  const clickHandler = () => {
    console.log('Yes, I want it!');
  };
  {
    /* then tell the  button to execute the function click handler whenever the button is clicked */
  }

  return (
    <Layout>
      <div>
        <head>
          <title>Product Detail: {props.dragonEgg.color}</title>
        </head>
        <h3>Product Detail: {props.dragonEgg.area}</h3>
        <div>
          <img src={props.dragonEgg.img} alt={props.dragonEgg.area} />
        </div>
        <h4>The color of this Dragon will be {props.dragonEgg.color}.</h4>
        <button onClick={clickHandler} className="button">
          Buy now for {props.dragonEgg.price.amount}{' '}
          {props.dragonEgg.price.currency}
        </button>
        <p>{product.chosen ? 'added to shopping cart' : ''}</p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');

  // the property that comes after the query object is the name of the file we're in!
  const idFromUrl = context.query.productId;

  // products is an array of products, egg represents one object
  // find receives a function with a comparison, whenever comparison is true, then the element is returned
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

export default product;
