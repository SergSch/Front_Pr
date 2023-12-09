import React from 'react';
import s from './Header.module.css';

import MyForm from './form/MyForm';

export default function Header({ newTask }) {
  return (
    <div className={s.header_wrap}>
      {/* <div className={s.selectBlock}>
        <MySelect text="Выберите день" options={daysOptions} />
        <MySelect text="Выберите важность" options={importanceOptions} />
      </div>
      <div className={s.bottom_block}>
        <MyInput />
        <MyBtn />
      </div> */}
      <MyForm newTask={newTask} />
    </div>
  );
}
