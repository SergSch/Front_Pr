import React from 'react';

export default function ProductCard(props) {
  const { id, title, description, price } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
