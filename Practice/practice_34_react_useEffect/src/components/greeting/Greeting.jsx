import { useEffect } from 'react';
import { useState } from 'react';

export default function Greeting({ name }) {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    console.log('The Greeting component had been rendered!');
    return () => {
      console.log('The Greeting component will be unmounted!');
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <p>{`Hello, ${!name ? 'visitor' : name}`}</p>
      <p>{time}</p>
    </>
  );
}

// 3. Дорабатываем компонент `Greeting`. Мы хотим, чтобы в нем отображались текущие время и дата с точностью до секунды. Нам нужно в компоненте `Greeting`, добавить параграф, в котором будет отображаться время и дата. При этом, это должно обновляться каждую секунду.

// Подсказка: здесь нам пригодится `setInterval`. То есть, нам нужно при монтировании компонента Greeting, запустить interval, который будет каждую секунду обновлять время.

// 1. Разбираемся со связью жизненного цикла компонента и хуком `useEffect`. Работаем с компонентом `Greeting`. Нужно, чтобы при ПЕРВОМ рендере нашего компонента, выводилось сообщение в консоль 'The Greeting component had been rendered!'. Уточнение: компонент `Greeting` теперь рендерится/прячется при нажатии на кнопку "Toggle Greeting Visibility".

// 2. Теперь сделаем так, чтобы при размонтировании (удалении из DOM) нашего компонента, в консоль отображалось сообщение 'The Greeting component will be unmounted!'.
