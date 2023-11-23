import React from 'react';
import { simpleList } from '../../data';
import style from './SimpleList.module.css';

export default function () {
  const listItems = simpleList.map((elem) => <li key={elem}>{elem}</li>);
  return (
    <ul
      className={simpleList.length < 5 ? `${style.decimal}` : `${style.list}`}
    >
      {listItems}
    </ul>
  );
}
