import fs from 'node:fs';

// this file is node.js

export const products = [
  {
    id: '1',
    area: 'Braavosi-orange',
    color: 'red',
    price: { amount: '900', currency: 'Gold Dragons' },
    img: '/images/orange.jpeg',
  },
  {
    id: '2',
    area: 'Braavosi-black',
    color: 'silver',
    price: { amount: '1150', currency: 'Gold Dragons' },
    img: '/images/black.jpeg',
  },
  {
    id: '3',
    area: 'Lysene-yellow',
    color: 'green',
    price: { amount: '990', currency: 'Gold Dragons' },
    img: '/images/yellow.jpeg',
  },
  {
    id: '4',
    area: 'Lysene-blue',
    color: 'blue',
    price: { amount: '1200', currency: 'Gold Dragons' },
    img: '/images/blue.jpeg',
  },
  {
    id: '5',
    area: 'Qohori-green',
    color: 'black',
    price: { amount: '1350', currency: 'Gold Dragons' },
    img: '/images/green.jpeg',
  },
  {
    id: '6',
    area: 'Qohori-brown',
    color: 'golden',
    price: { amount: '17000', currency: 'Gold Dragons' },
    img: '/images/brown.jpeg',
  },
];
