import React from 'react';
import classes from './MyButton.module.css';

export default function MyButton({ children, onSubmit, ...props }) {
  return (
    <button onSubmit={onSubmit} className={classes.myBtn}>
      {children}
    </button>
  );
}
