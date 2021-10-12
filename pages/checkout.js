// const arr2 = [
//   { id: 1, qty: 1 },
//   { id: 2, qty: 2 },
//   { id: 3, qty: 5 },
//   { id: 4, qty: 34 },
// ];

// const arr1 = [1, 2, 5, 34];

// export default function App() {
//   const value2 = arr2.reduce((acc, item) => {
//     const newNumber = acc + item.qty;
//     return newNumber;
//   }, 0);

//   const value = arr1.reduce(
//     (acc, item) => {
//       const newAcc = { qty: item + acc.qty };
//       return newAcc;
//     },
//     { qty: 0 },
//   );

//   return (
//     <>
//       <div className="App">arr1: {JSON.stringify(value)}</div>
//       <div className="App">cartItems: {JSON.stringify(value2)}</div>
//     </>
//   );
// }

// const itemsInCart = cart.reduce(
//   (acc, item) => {
//     const newCart = { qty: item + cart.qty };
//     return newCart;
//   },
//   { qty: 0 },
// );
