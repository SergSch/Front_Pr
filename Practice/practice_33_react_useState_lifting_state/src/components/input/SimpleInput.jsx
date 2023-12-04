import { useState } from 'react';
import classes from './SimpleInput.module.css';

export default function SimpleInput(props) {
  const [theme, setTheme] = useState('dark');

  return (
    <input
      className={`${classes.input}
         ${props.isError ? classes.errorInput : ''}
         ${props.size ? classes[props.size + 'Input'] : ''}
         ${classes[theme + 'Input']}
        `}
      type="text"
      placeholder="Default placeholder"
      disabled={props.disabled}
    />
  );
}

// 1. Вспоминаем работу с состоянием. В компонент `SimpleInput`, добавляем локальное состояние, которое будет отвечать за тему инпута (светлая/темная - `light/dark`). По умолчанию - светлая тема. Нужно применять к инпуту класс `lightInput` или `darkInput` в зависимости от темы.
