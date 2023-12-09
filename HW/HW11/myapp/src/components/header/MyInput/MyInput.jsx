import React from 'react';
import s from './MyInput.module.css';

export default function MyInput() {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Description"
        className={s.input}
      />
    </div>
  );
}
