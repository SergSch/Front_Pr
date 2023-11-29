import classes from './SimpleParagraph.module.css';

function SimpleParagraph({ text, onClick, currentTheme }) {
  let styleTheme = currentTheme ? classes[currentTheme + 'Theme'] : '';
  return (
    <p
      className={` ${classes.simpleParagraph} ${styleTheme} `}
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default SimpleParagraph;

// 1. Пристрелочная, на освежение в памяти пропсов. В модуле `SimpleParagraph.module.css`, определены классы, `lightTheme`, `darkTheme`. Нужно сделать так, чтобы компонент `SimpleParagraph` принимал в пропсах проп `currentTheme`, который будет содержать текущую тему приложения (`light`, `dark`). И в зависимости от этого пропа, применять к параграфу соответствующий класс. Если проп не определен - никакую тему не применяем.
