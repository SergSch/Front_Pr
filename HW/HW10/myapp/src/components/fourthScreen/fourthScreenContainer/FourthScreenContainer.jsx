import React from 'react';
import classes from './FourthScreenContainer.module.css';
import FourthScreenItem from '../fourthScreenItem/FourthScreenItem';

export default function FourthScreenContainer() {
  return (
    <div className={classes.container}>
      <FourthScreenItem title="Годовое ТО" backgroundColor="#22356F" />
      <FourthScreenItem
        title={`Выравнивание
         колес`}
        backgroundColor="#0052C1"
      />
      <FourthScreenItem
        title={`Настройка
        переключателей`}
        backgroundColor="#76B58B"
      />
    </div>
  );
}
