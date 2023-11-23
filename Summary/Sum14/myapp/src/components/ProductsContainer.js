import React from 'react';
import ProductItem from './ProductItem';

export default function ProductsContainer() {
  const products = [
    {
      id: 1,
      title: 'Apple',
      description: 'A very tasty apple',
      price: 50,
      country: 'Germany',
      img_url: 'https://reqres.in/img/faces/7-image.jpg',
      email: '11111@gmail.com',
    },
    {
      id: 2,
      title: 'Orange',
      description: 'A very tasty orange',
      price: 20,
      country: 'Spain',
      img_url: 'https://reqres.in/img/faces/8-image.jpg',
      email: '222222@gmail.com',
    },
    {
      id: 3,
      title: 'Lemon',
      description: 'A very tasty lemon',
      price: 30,
      country: 'Poland',
      img_url: 'https://reqres.in/img/faces/8-image.jpg',
      email: '33333@gmail.com',
    },
    {
      id: 4,
      title: 'Banana',
      description: 'A very tasty banana',
      price: 45,
      country: 'Argentina',
      img_url: 'https://reqres.in/img/faces/9-image.jpg',
      email: '444444@gmail.com',
    },
  ];
  return (
    <div>
      {products.map((elem) => (
        <ProductItem
          title={elem.title}
          description={elem.description}
          price={elem.price}
          country={elem.country}
          img_url={elem.img_url}
          email={elem.email}
          key={elem.id}
        />
      ))}
    </div>
  );
}
