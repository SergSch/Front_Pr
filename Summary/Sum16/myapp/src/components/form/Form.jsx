import React, { useState } from 'react';
import MyButton from './MyButton/MyButton';
import Input from './Input/Input';
import classes from './Form.module.css';

export default function Form({ create }) {
  const [word, setWord] = useState({ wordE: '', wordR: '' });

  function addNewWord(event) {
    event.preventDefault();
    const newWord = {
      ...word,
      id: Date.now(),
    };
    create(newWord);
    // setWord({ wordE: '', wordR: '' });
  }

  return (
    <div>
      <form className={classes.form}>
        <Input
          value={word.wordE}
          onChange={(event) => setWord({ ...word, wordE: event.target.value })}
          type="text"
          placeholder="English"
        />
        <Input
          value={word.wordR}
          onChange={(event) => setWord({ ...word, wordR: event.target.value })}
          type="text"
          placeholder="Russian"
        />
        <MyButton onSubmit={addNewWord}>Add Word</MyButton>
      </form>
    </div>
  );
}
