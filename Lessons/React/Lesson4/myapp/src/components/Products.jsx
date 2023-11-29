import React, { useState } from 'react';

export default function Products() {
  const data = [
    { id: 1, title: 'Самокат', price: 3000 },
    { id: 2, title: 'Велосипед', price: 5000 },
    { id: 3, title: 'Ролики', price: 400 },
    { id: 4, title: 'Телевизор', price: 6000 },
  ];

  const [products, setProducts] = useState(data);

  const delFirstProd = () => {
    // Desition1
    // let copy = [...products];
    // copy.shift();
    // setProducts(copy);

    // Desition2
    // const filtered = products.filter((elem, i) => i !== 0);
    // setProducts(filtered);

    // Desition3
    setProducts(products.slice(1));
  };

  const delLastProd = () => {
    // Desition1
    // let copy = [...products];
    // copy.pop();
    // setProducts(copy);
    // Desition3
    // setProducts(products.slice(0, -1));
  };

  const increasePrice = () => {
    setProducts(
      // Desition1
      //   products.map((elem) => ({ ...elem, price: Math.round(elem.price * 1.1) }))

      //   Desition2
      products.map((elem) => {
        elem.price = Math.round(elem.price * 1.1);
        return elem;
      })
    );
  };

  const sortPrice = () => {
    // Desition1
    let copy = [...products];
    setProducts(copy.sort((a, b) => a.price - b.price));

    // Desition2
    // setProducts([...products].sort((a, b) => a.price - b.price));

    // Desition3
    // setProducts(products.slice().sort((a, b) => a.price - b.price));
  };

  function delProductByID(id) {
    const filteredArr = products.filter((elem) => elem.id !== id);
    setProducts(filteredArr);
  }

  function priceToZero(id) {
    setProducts(
      products.map((elem) => {
        if (elem.id === id) {
          return { ...elem, price: 0 };
        }
        return elem;
      })
    );
  }

  const addProduct = () => {
    const product = {
      id: Date.now(),
      title: prompt('Enter name of the product'),
      price: +prompt('Enter price'),
    };
    setProducts([...products, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button onClick={delFirstProd}>Delete First Product</button>
        <button onClick={delLastProd}>Delete Last Product</button>
        <button onClick={increasePrice}>Increase Price</button>
        <button onClick={sortPrice}>Sort Products</button>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div>
        {products.map((elem) => (
          <div
            key={elem.id}
            onDoubleClick={() => delProductByID(elem.id)}
            onClick={() => {
              priceToZero(elem.id);
            }}
          >
            <h4>{elem.title}</h4>
            <p>{elem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
