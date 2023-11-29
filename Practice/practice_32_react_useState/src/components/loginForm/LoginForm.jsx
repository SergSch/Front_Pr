import React, { useState } from 'react';
import SimpleParagraph from '../simpleParagraph/SimpleParagraph';
import classes from './LoginForm.module.css';

export default function LoginForm() {
  const [login, setLogin] = useState('');

  const [passw, setPassw] = useState('');

  const [error, setError] = useState('');

  const [checkLogin, setCheckLogin] = useState('');

  const [checkPass, setCheckPass] = useState('');

  return (
    <div className={classes.form}>
      <input
        value={login}
        className="input"
        type="text"
        placeholder="Login"
        onChange={(event) => setLogin(event.target.value)}
        onBlur={() => {
          login.length < 3
            ? setCheckLogin('You need longer name')
            : setCheckLogin('');
        }}
      />
      {checkLogin ? <SimpleParagraph text={checkLogin} /> : ''}
      <input
        value={passw}
        className="input"
        type="password"
        placeholder="Password"
        onChange={(event) => setPassw(event.target.value)}
        onBlur={() => {
          passw.length < 4
            ? setCheckPass('Password must be longer than 4 symbols')
            : setCheckPass('');
        }}
      />
      {checkPass ? <SimpleParagraph text={checkPass} /> : ''}
      <button
        onClick={() => {
          if (!login && !passw) {
            setError('Enter login and password');
          } else {
            setError('');
            console.log(login, passw);
          }
        }}
      >
        Enter
      </button>
      {error ? <SimpleParagraph text={error} /> : ''}
    </div>
  );
}

// 6. Усложняем нашу форму - добавляем валидацию. Мы хотим при нажатии на кнопку "Войти" проверить, не пустые ли у нас поля логина и пароля. Если пустые - нам нужно показать пользователю сообщение об ошибке ("Заполните все поля"). Для показа, нам нужно добавить еще один параграф, под кнопкой, в котором мы будем показывать ошибку. Этот параграф должен отображаться только тогда, когда у нас в форме действительно есть ошибка (вспоминаем условный рендеринг).

// То есть:
//  - нам нужно расширить состояние формы - добавить в него флаг, который будет индикатором наличия ошибки (`isError`).
//  - при клике на кнопку, нам нужно проверить значения `login`, `passwd` в стейте формы. Если хоть одно пустое - нам нужно записать в стейт isError = true

// 5. Добавляем обработчик на кнопку - выводим в консоль текущее состояние `formState`.
// 4. Усложняем стейт. Добавляем в наш компонент `LoginForm` поле для ввода пароля. Это тоже инпут, с классом `input`, и типом `passwd`. Значение его также должно храниться в стейте компонента. Рекомендуется заменить стейт `login`, созданный ранее, на объект `formState`, в котором будут храниться значения полей login, passwd, и использовать его в качестве стейта. ВАЖНО! При работе с объектом, не забываем, что при изменении какого-то поля нам нужно не потерять значение второго поля.

// 2. Создаем компонент `LoginForm`. Для этого, в папке `components`, создаем папку `loginForm`, и в ней - компонент. Он должен содержать:
//  - текстовое поля для ввода логина (инпут с классом input)
//  - кнопку "Войти". Используем наш компонент `Button`, а не просто кнопку браузера.

// 3. Добавляем внутреннее состояние в нашу форму. Нам нужно, чтобы введенное пользователем в инпуте значение теперь хранилось в стейте компонента. Для этого:
//  - нужно добавить внутреннее состояние - хук `useState`. Назовем его `login`
//  - значение в инпуте (`value`) - поставить `login`. То есть теперь инпут заполняется значением из стейта.
//  - добавить обработчик события `onChange` на инпут ( `onChange={ (event) => {...} }` )при изменении инпута, мы должны менять наш стейт - записывать в него значение `event.target.value`.
