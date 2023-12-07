import React, { useState } from 'react';

export default function AddForm(props) {
  const { addTodo } = props;

  function inputHandler(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      addTodo(event.target.value);
    }
  }

  return (
    <div className="input_elem">
      <input onKeyDown={inputHandler} type="text" name="title" id="" />
    </div>
  );
}

// Реалзуйте процесс, который позволит вызвать функцию addTodo
// в случае, если будет нажата клавиша Enter внутри инпута.
// Функция должна получить значение инпута
