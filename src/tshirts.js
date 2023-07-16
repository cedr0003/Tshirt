import { buildQueries } from '@testing-library/react';
import blue from './img/blue-t-shirt.jpg';
import purple from './img/bright-purple-t-shirt.jpg';
import cblue from './img/cobalt-blue-t-shirt.jpg';
import greent from './img/green-t-shirt.jpg';
import greyt from './img/grey-t-shirt.jpg';
import light from './img/light-green-t-shirt.jpg';
import tpurple from './img/purple-t-shirt.jpg';
import tredt from './img/red-t-shirt.jpg';
import teallt from './img/teal-t-shirt.jpg';

export const tshirtsData = [
  { id:1,
    title: 'Blue T-Shirt',
    image: blue,
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {id:2,
    title: 'Bright Purple T-Shirt',
    image: purple,
    price: 5.99,
    stock: 1,    quantity: 1
  },
  { id:3,
    title: 'Cobalt Blue T-Shirt',
    image: cblue,
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  { id:4,
    title: 'Green T-Shirt',
    image: greent,
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  { id:5,
    title: 'Grey T-Shirt',
    image: greyt,
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  { id:6,
    title: 'Light Green T-Shirt',
    image: light,
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  { id:7,
    title: 'Purple T-Shirt',
    image: tpurple,
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  { id:8,
    title: 'Red T-Shirt',
    image: tredt,
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  { id:9,
    title: 'Teal T-Shirt',
    image: teallt,
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

export const tshirts = tshirtsData;
