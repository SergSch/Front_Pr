import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import style from './ProductCard.module.css';
import basketImg from './media/Image20231122124713.jpg';

console.log(style);

export default function ProductCard(props) {
  const { title, image, price, brand, description } = props;
  return (
    <div className={style.product_card_wrapper}>
      <img width="150" src={basketImg} />
      <ProductImage title={title} image={image} />
      <ProductInfo price={price} brand={brand} description={description} />
    </div>
  );
}
