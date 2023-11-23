import React from 'react';
import style from './Link.module.css';

export default function Link(props) {
  return (
    <div>
      <a href={props.to} className={style.link}>
        {props.text}
      </a>
    </div>
  );
}
