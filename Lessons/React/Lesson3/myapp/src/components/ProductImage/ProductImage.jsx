import React from 'react';
import styles from './ProductImage.module.css';

export default function ProductImage(props) {
  const { title, image } = props;
  return (
    <div className={styles.image_wrapper}>
      <img className={styles.image_style} src={image} alt="image" />
      <h2 className={styles.title_text}>{title}</h2>
    </div>
  );
}
