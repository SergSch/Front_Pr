import React from 'react';
import classes from './Triggers.module.css';

export default function Triggers({ changeToEng, changeToRus }) {
  return (
    <div className={classes.wrap}>
      <div onClick={changeToEng}>ENG</div>
      <div onClick={changeToRus}>RUS</div>
    </div>
  );
}
