import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import LoginForm from './components/loginForm/LoginForm';

// 1. Пристрелочная - добавляем счетчик кликов на кнопку. Добавить в компоненте `App` кнопку. И нужно, чтобы компонент "считал" количество кликов на кнопку. То есть, нам нужно:
//  - добавить в компонент `App` состояние (clickCount) состояние (хук `useState`)
//  - добавить обработчик клика на кнопке - при клике увеличивать счетчик на 1
//  - добавить в компонент `App` наш `SimpleParagraph`, в котором выводить текст "Кликнули N раз"

// 2. Создаем компонент `LoginForm`. Для этого, в папке `components`, создаем папку `loginForm`, и в ней - компонент. Он должен содержать:
//  - текстовое поля для ввода логина (инпут с классом input)
//  - кнопку "Войти". Используем наш компонент `Button`, а не просто кнопку браузера.

function App() {
  const [clickCount, setClickCount] = useState(0);

  function click() {
    setClickCount(clickCount + 1);
  }
  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <button onClick={click}>Count</button>
      <SimpleParagraph text={`Кликнули ${clickCount} раз`} />
      <LoginForm />
    </div>
  );
}

export default App;
