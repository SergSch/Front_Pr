import React from 'react';
import SimpleInput from '../input/SimpleInput';
import SimpleParagraph from '../simpleParagraph/SimpleParagraph';

export default function SimpleComponent({ currentTheme }) {
  return (
    <div>
      <SimpleParagraph text="Simple Component" currentTheme={currentTheme} />
      <SimpleInput />
    </div>
  );
}
// 2. Пристрелочная задача. Создаем новый компонент, `SimpleComponent`. В нем нам нужно отрисовать наш `SimpleParagraph` с текстом `Simple Component`, и `SimpleInput` с плейсхолдером `Simple Input`. Этот компонент отрендерим в компоненте `App`.
