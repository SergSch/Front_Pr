import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {
  const [dataProducts, setDataProducts] = useState([]);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((json) => {
        setDataProducts(json);
        setWaiting(false);
        console.log(json);
      });
  }, []);

  return (
    <div>
      {waiting ? (
        <p>Подождите, идет загрузка...</p>
      ) : (
        dataProducts.products &&
        dataProducts.products.map((elem) => (
          <ProductCard
            key={elem.id}
            title={elem.title}
            price={elem.price}
            description={elem.description}
          />
        ))
      )}
    </div>
  );
}

// 7. Добавляем индикатор загрузки товаров в компонент `ProductList`. Нужно, пока идет загрузка, показывать вместо списка товаров параграф с текстом "Подождите, идет загрузка...".

// 6. Создаем компонент для списка товаров, `ProductList`. Он будет рендерить список товаров. Первый шаг - научиться загружать это список с бэка, с адреса `https://dummyjson.com/products`. Нужно при монтировании компонента (первый рендер), загружать этот список, и сохранять ответ в локальном стейте. ВАЖНО! Асинхронную операцию (обращение к бэку), нужно сделать в эффекте!
