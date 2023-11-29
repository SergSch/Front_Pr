import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Пристрелочная - добавляем счетчик кликов на кнопку. Добавить в компоненте `App` кнопку. И нужно, чтобы компонент "считал" количество кликов на кнопку. То есть, нам нужно:
//  - добавить в компонент `App` состояние (clickCount) состояние (хук `useState`)
//  - добавить обработчик клика на кнопке - при клике увеличивать счетчик на 1
//  - добавить в компонент `App` наш `SimpleParagraph`, в котором выводить текст "Кликнули N раз"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < App />
);