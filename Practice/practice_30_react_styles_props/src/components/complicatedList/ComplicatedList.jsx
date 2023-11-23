import React from 'react';
import { complicatedList } from './../../data.js';
import style from './ComplicatedList module.css';

export default function ComplicatedList() {
  const data = complicatedList.map((elem) => (
    <div key={elem.name}>
      <h3>{elem.name}</h3>
      <p>{elem.price}</p>
    </div>
  ));
  return <div>{data}</div>;
}
