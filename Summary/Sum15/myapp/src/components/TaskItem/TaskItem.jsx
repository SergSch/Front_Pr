import React from 'react';
import classes from './TaskItem.module.css';
import ResponsiblePeopleContainer from '../responsiblePeopleContainer/ResponsiblePeopleContainer';

export default function TaskItem({ title, completed, people }) {
  const statusText = completed ? 'done' : 'not done';
  const statusColor = {
    backgroundColor: completed ? 'lightgreen' : 'lightgrey',
  };
  const colorText = {
    color: completed ? 'blue' : 'red',
  };

  return (
    <div className={classes.card} style={statusColor}>
      <p>Title: {title}</p>
      <p style={colorText}>Status: {statusText}</p>
      <ResponsiblePeopleContainer people={people} />
    </div>
  );
}
