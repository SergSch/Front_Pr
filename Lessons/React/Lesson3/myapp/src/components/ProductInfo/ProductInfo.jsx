import React from 'react';
import styles from './ProductInfo.module.css';

export default function ProductInfo(props) {
  const { price, brand, description } = props;
  return (
    <div className={styles.product_info_wrapper}>
      <p>Price: {price}$</p>
      <p>Brand: {brand}</p>
      <p>Description: {description}</p>
    </div>
  );
}
