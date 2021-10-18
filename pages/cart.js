import Head from 'next/head';
import Layout from '../components/Layout';

// cartCookie is showing me the array of objects that's in the cookie!
export default function Cart(props) {
  // const cartCookie = getCookie('cart');

  // console.log(props.cartArray);
  // console.log(cartCookie);

  // // map over cartCookie {id, qty} output and create a new array showing the quantity and the chosen eggs:

  // // This map function returns the quantities as numbers. But only the first time, afterwards, I get an error message!

  // const eggsFromCookies = cartCookie.map(function (cartCookie) {
  //   return cartCookie['qty'];
  // });
  // console.log(`THESE ARE JUST QUANTITIES AS NUMBERS:${eggsFromCookies}`);

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

//TODOs:
// Get the cookie serverside
// Get the products array server side from database
// Create the superProducts array serverside with products + qty based on cookie
// (superProducts are a mixture between cookies and products)
// Render the array of superProducts clientside with props = Pass this new array to the frontend

export async function getServerSideProps(context) {
  const { products } = await import('../util/database');

  const getProducts = products;

  const rawCookie = context.req.cookies.cart;

  const renderedCookie = rawCookie ? JSON.parse(rawCookie) : [];

  console.log('Rendered Cookie', renderedCookie);
  // will be looking like this: [ { id: '1', qty: 1 }, { id: '3', qty: 2 }, { id: '6', qty: 2 } ]

  console.log('products', products);
  /* will be looking like this:
  [
    {
      id: '1',
      area: 'Braavosi-orange',
      color: 'red',
      price: { amount: '900', currency: 'Gold Dragons' },
      img: '/images/orange.jpeg'
    }
  ]
  */

  // comparing the id of the cookie array (p) and the database (prod) - creating the superProduct!
  const cartArray = renderedCookie.map((p) => {
    const cartObject = getProducts.find((prod) => prod.id === p.id);
    // spread the cartObject plus the quantity of every object in the cart
    return {
      ...cartObject,
      qty: p.qty,
    };
  });

  console.log('cart array', cartArray);
  /* will be looking like this:
  [
    {
      id: '1',
      area: 'Braavosi-orange',
      price: { amount: '900', currency: 'Gold Dragons' },
      img: '/images/orange.jpeg',
      qty: 2
    }
  ]
  */

  return {
    props: { cartArray, products }, // will be passed to the page component as props
  };
}
