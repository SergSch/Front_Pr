import React from 'react';

export default function TodoItem(props) {
  const { title, completed, id, delTodoById, changeCompleted } = props;

  return (
    <div
      className="todo_card"
      style={{ backgroundColor: completed ? 'green' : 'red' }}
      onDoubleClick={() => delTodoById(id)}
      onClick={() => changeCompleted(id)}
    >
      <h2>{title}</h2>
      <p>{completed + ''}</p>
    </div>
  );
}
