import React from 'react';
import classes from './FifthBlockR.module.css';

export default function FifthBlockR() {
  return (
    <div className={classes.wrap}>
      <h2 className={classes.title}>Прокат велосипедов</h2>

      <p className={classes.text}>
        У нас вы можете взять на прокат хорошо обслуженные и настроенные
        велосипеды. Как раз мы находимся в прекрасном парке!{' '}
      </p>
    </div>
  );
}
