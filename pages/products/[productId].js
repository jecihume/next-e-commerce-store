import Layout from '../../components/Layout';
import { myGlobalStyles } from '../../styles/globalStyles';
import { getCookie, setCookie } from '../../util/cookie.js';

// this is a React component:
const Product = (props) => {
  // or like this: export default function product(props) {
  // this is only used, when I am grabbing information from the front end through the URl:
  // const router = useRouter();
  // const { product } = router.query;
  console.log(props);
  // if (typeof window !== 'undefined') {
  //   console.log(window.localStorage);
  // }

  const clickHandler = () => {
    // this console.log is showing the whole objects of the products
    console.log(props.dragonEgg.id);

    //case 1: empty cart or cookie undefined -> create cookie
    // Cookies.set('cart', JSON.stringify([props.dragonEgg.id]));
    const oldCookie = getCookie('cart');
    // add more stuff to the virtual bag:
    if (oldCookie === undefined) {
      setCookie('cart', [{ id: props.dragonEgg.id, qty: 1 }]);
    } else if (
      !oldCookie.some((cookieEgg) => {
        return (
          cookieEgg.id === props.dragonEgg.id
        ); /* this is a boolean, that's why I am returning it! */
      })
      /* if the cookie exists, but doesn't contain an item with the id of the Egg, add up */
    ) {
      const newCookie = [...oldCookie, { id: props.dragonEgg.id, qty: 1 }];
      setCookie('cart', newCookie);
    } else {
      /* cookie contains already an Egg with that Id*/
      /* [{id:2, qty:1}, {id:5, qty: 2}] this is representing the oldCookie; cookieEgg is the object inside of the array of eggs! */
      const newCookie = oldCookie.map((cookieEgg) => {
        if (cookieEgg.id === props.dragonEgg.id) {
          const newCookieEgg = cookieEgg;
          newCookieEgg.qty = newCookieEgg.qty + 1;
          return newCookieEgg;
        } else {
          return cookieEgg;
        }
      });

      setCookie('cart', newCookie);
    }
    // filter to add quantity by one!

    // Cookies.remove('cart');
    // what are the next steps?
    // I want the id of my object to show in the array of cart in the cookie
    // how do I get there?
    // I need to get to the ID
    // now I need to get the id into the object
  };

  /* then tell the  button to execute the function click handler whenever the button is clicked */

  return (
    <Layout>
      <div>
        <head>
          <title>Product Detail: {props.dragonEgg.color}</title>
        </head>
        <h3>Product Detail: {props.dragonEgg.area}</h3>
        <div>
          <img
            src={props.dragonEgg.img}
            alt={props.dragonEgg.area}
            className="img"
          />
        </div>
        <h4 className="h4">
          The color of this Dragon will be {props.dragonEgg.color}.
        </h4>
        <button onClick={clickHandler} className="button">
          Buy now for {props.dragonEgg.price.amount}{' '}
          {props.dragonEgg.price.currency}
        </button>
        <p>{Product.chosen ? 'added to shopping cart' : ''}</p>
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
  return {
    props: { dragonEgg },
  };
}

// const eggsInCart = [{dragonEgg}];

//   export default function CartItems() {
//     const howMany = eggsInCart.reduce((acc, item) => {
//     const newAmount = acc + item.qty;
//     return newAmount;
//   }, 0);

//   return <div>CartItems: {JSON.stringify(howMany)}</div>;
//   }

export default Product;
