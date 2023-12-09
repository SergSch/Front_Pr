import React from 'react';
import s from './MySelect.module.css';

export default function MySelect(props) {
  return (
    <select className={s.select}>
      <option selected>{props.text}</option>
      {props.options}
    </select>
  );
}
