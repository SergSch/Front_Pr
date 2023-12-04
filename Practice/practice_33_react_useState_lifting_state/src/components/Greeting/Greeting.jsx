import React, { useState } from 'react';
import SimpleParagraph from '../simpleParagraph/SimpleParagraph';

export default function Greeting({ userName }) {
  //   const [name, setName] = useState('Viktor');
  return (
    <div>
      <SimpleParagraph text={`Hello, ${!userName ? 'Visitor' : userName}`} />
    </div>
  );
}

// 2. Создаем компонент `Greeting`, который будет приветствовать нашего пользователя. У него должно быть свое внутреннее состояние, которое содержит имя пользователя (по умолчанию - пустая строка). Задача компонента - отрендерить параграф. Если имя пользователя пустое - текст "Hello, visitor!", а если непустое - то "Hello, USERNAME!". Компонент отрендерим в компоненте `App`, под `LoginForm`.
