import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
  const start_todo = [
    { id: 1, title: 'Помыть руки', completed: true },
    { id: 2, title: 'Сделать зарядку', completed: false },
    { id: 3, title: 'Наконец изучить React', completed: true },
  ];

  const [todos, setTodos] = useState(start_todo);

  const delTodoById = (id) => {
    const filteredTodos = todos.filter((elem) => elem.id !== id);
    setTodos(filteredTodos);
  };

  const changeCompleted = (id) => {
    const completTodo = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setTodos(completTodo);
  };

  const addTodo = (title) => {
    let new_todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, new_todo]);
  };

  return (
    <div>
      <AddForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        delTodoById={delTodoById}
        changeCompleted={changeCompleted}
      />
    </div>
  );
}

export default App;
