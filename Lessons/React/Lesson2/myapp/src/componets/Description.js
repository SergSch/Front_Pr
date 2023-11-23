import React from 'react';

export default function Description() {
  let a = Math.ceil(Math.random() * 100);

  let str = 'product_wrapper';
  return (
    <>
      <div>
        <p className={a === 10 ? str : 'empty'}>Price: 200$</p>
        <p className={str}>Raiting: 5.5</p>
        <p>{a}</p>

        {a > 10 ? <h1>a more than 10</h1> : <p>a less than 10</p>}
      </div>
    </>
  );
}
