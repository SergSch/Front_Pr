import React, { useState } from 'react';
import MyButton from './MyButton/MyButton';
import Input from './Input/Input';
import classes from './Form.module.css';

export default function Form({ create, wordsHandler }) {
  const addNew = (event) => {
    event.preventDefault();
    const { rus, eng } = event.target;

    const newWord = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      language: 'en',
    };

    wordsHandler(newWord);
    event.target.reset();
  };

  return (
    <div>
      <form className={classes.form} onSubmit={addNew}>
        <input type="text" placeholder="English" name="eng" />
        <input type="text" placeholder="Russian" name="rus" />
        <MyButton>Add Word</MyButton>
      </form>
    </div>
  );
}
