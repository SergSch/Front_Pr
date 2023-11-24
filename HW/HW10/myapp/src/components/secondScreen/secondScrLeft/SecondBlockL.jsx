import React from 'react';

import classes from './SecondBlockL.module.css';

export default function secondBlockL() {
  return (
    <div className={classes.blockL}>
      <h1 className={classes.title}>Что мы предлагаем</h1>

      <p className={classes.text}>
        В нашей мастерской можно выполнить комплексное техническое обслуживание
        велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы.
        Вовремя проведенное ТО велосипеда помогает избежать многих проблем и
        дорогого ремонта. Все работы выполняем качественно и с душой.{' '}
      </p>
    </div>
  );
}
