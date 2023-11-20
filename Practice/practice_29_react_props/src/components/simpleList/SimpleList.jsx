import React from 'react';
import { simpleList } from './../../data';

export default function SimpleList() {
  const listItems = simpleList.map((elem) => (
    <li key={elem.id}>{elem.title}</li>
  ));
  return <ul>{listItems}</ul>;
}
