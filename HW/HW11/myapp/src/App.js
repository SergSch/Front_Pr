import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { GiCrossedSabres } from 'react-icons/gi';

function App() {
  let data = {
    Mo: [
      {
        id: 1,
        title: 'Buy door',
        priority: 'wichtig',
      },
      {
        id: 2,
        title: 'Go to the gym',
        priority: 'not-wichtig',
      },
    ],
    Tu: [
      {
        id: 3,
        title: 'Buy door',
        priority: 'wichtig',
      },
      {
        id: 4,
        title: 'Go to the gym',
        priority: 'wichtig',
      },
      {
        id: 5,
        title: 'Buy a pen',
        priority: 'not-wichtig',
      },
      {
        id: 6,
        title: 'Wash the cat',
        priority: 'not-wichtig',
      },
      {
        id: 7,
        title: 'Fix the light',
        priority: 'not-wichtig',
      },
    ],
    Fr: [
      {
        id: 8,
        title: 'Charge water',
        priority: 'wichtig',
      },
    ],
  };

  const [todos, setTodos] = useState(
    Object.entries(data).map(([day, tasks]) => ({ day, tasks }))
  );
  console.log(todos);
  function createTask({ day, priority, title }) {
    const dayExists = todos.some((elem) => elem.day === day);

    if (!dayExists) {
      const newDay = {
        day,
        tasks: [{ id: Date.now(), title, priority }],
      };

      setTodos([...todos, newDay]);
    } else {
      const updatedTodos = todos.map((elem) => {
        if (elem.day === day) {
          return {
            ...elem,
            tasks: [...(elem.tasks || []), { id: Date.now(), title, priority }],
          };
        }
        return elem;
      });

      setTodos(updatedTodos);
    }
  }

  const sortedTodos = todos.sort((a, b) => {
    const daysOrder = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day);
  });

  const deleteContainer = (day) => {
    setTodos(
      todos.filter((elem) => elem.day !== day || elem.tasks.length !== 0)
    );
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.map((elem) => {
      const updatedTasks = elem.tasks.filter((task) => task.id !== id);
      return { ...elem, tasks: updatedTasks };
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header newTask={createTask} />

      <div className="todosWrap">
        {sortedTodos.map((elem) => (
          <div className="container" key={elem.day}>
            <GiCrossedSabres
              className="bigClose"
              onClick={() => deleteContainer(elem.day)}
            />
            <div className="dayWrap">
              <h3 className="day">{elem.day}</h3>
            </div>
            <ul className="taskWrap">
              {elem.tasks.map((task) => (
                <li
                  className="task"
                  key={task.id}
                  style={{
                    backgroundColor:
                      task.priority === 'not-wichtig' ? '#1ABC9C' : '#E74C3C',
                  }}
                >
                  {task.title}
                  <GiCrossedSabres
                    className="smallClose"
                    onClick={() => deleteTask(task.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
