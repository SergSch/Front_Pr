import React from 'react';
import { complicatedList } from './../../data';

export default function ComplicatedList() {
  const listItem = complicatedList.map((elem) => (
    <div key={elem.id}>
      <h3>{elem.title}</h3>
      <p>{elem.price}</p>
    </div>
  ));
  return <div>{listItem}</div>;
}
