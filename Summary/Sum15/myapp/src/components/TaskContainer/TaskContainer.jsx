import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import style from './TaskContainer.module.css';

export default function TaskContainer() {
  const tasks = [
    {
      id: 1,
      title: 'To buy bread',
      completed: true,
      people: ['Anton', 'Irina'],
    },
    {
      id: 2,
      title: 'To organize a zoom-neeting',
      completed: false,
      people: ['Irina'],
    },
    {
      id: 3,
      title: 'To send an email',
      completed: false,
      people: [],
    },
    {
      id: 4,
      title: 'To prepare dinner',
      completed: true,
      people: ['Irina', 'Fedor', 'Ivan'],
    },
  ];
  return (
    <div className={style.container}>
      {tasks.map((elem) => (
        <TaskItem
          key={elem.id}
          title={elem.title}
          completed={elem.completed}
          people={elem.people}
        />
      ))}
    </div>
  );
}
