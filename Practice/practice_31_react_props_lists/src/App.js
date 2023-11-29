import React from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import SimpleInput from './components/input/SimpleInput';
import SimpleComponent from './components/SimpleComponent/SimpleComponent';
import { useState } from 'react';

function App() {
  // let appTheme = 'dark';

  const [state, setState] = useState('simpleState');
  const [appTheme, setappTheme] = useState('dark');

  const paragraphClickHandler = () => {
    console.log('Handler on paragraph');
  };

  return (
    <div className="App">
      <button
        onClick={() => setappTheme(appTheme == 'light' ? 'dark' : 'light')}
      >
        {appTheme}
      </button>
      <button onClick={() => setState(state.toUpperCase())}>UP</button>

      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <SimpleParagraph text={state} />

      <SimpleParagraph
        text="Paragraph text!"
        onClick={paragraphClickHandler}
        currentTheme={appTheme}
      />

      <SimpleComponent currentTheme={appTheme} />
      <SimpleInput disabled={true} size="small" />
      <SimpleInput disabled={false} size="medium" />
      <SimpleInput isError={true} size="large" />
      <LoginForm />
    </div>
  );
}

// 7. Управление состоянием. Добавьте в компонент `App`, в `div` верхнего уровня, кнопку. Текстом кнопки должна быть текущая тема приложения.

// 6. Теперь поработаем с состоянием. В компоненте `App`, давайте хранить тему в состоянии, а не в статичной переменной.

// 5. Добавьте в компонент `App`, в `div` верхнего уровня, кнопку. Текст кнопки - Up. При клике на кнопку нужно перевести строку из стейта в верхний регистр.

// 3. Поработаем с передачей пропсов. Мы хотим, чтобы на уровне приложения у нас была бы одна тема. В компоненте `App`, объявим переменную `appTheme`, и запишем в нее значение темы (пусть будет `dark`). Нам нужно, чтобы эта тема была передана во все существующие параграфы приложения (в т.ч. и те, которые отрисованы в компоненте `SimpleComponent`). Подсказка - для этого понадобится передать тему в компонент `SimpleComponent`.

// 4. Начинаем работать с состоянием. Первая - пристрелочная. Добавляем в компонент `App` состояние (`state`), с использованием хука `useState`. Пока что, запишем туда строку `simpleState`. И добавим наш `SimpleParagraph`, в пропсах ему нужно передать значение состояния.

/*
 6. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
 */
function LoginForm() {
  return (
    <div>
      <input placeholder="Login" />
      <input placeholder="Password" type="password" />
      <button>Enter</button>
    </div>
  );
}

export default App;
