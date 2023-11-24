import React from 'react';
import classes from './FourthScreenItem.module.css';

export default function FourthScreenItem(props) {
  const itemStyle = {
    backgroundColor: props.backgroundColor,
    whiteSpace: 'pre-line',
  };
  return (
    <div className={classes.fourthWrap} style={itemStyle}>
      <div className={classes.line}></div>
      <h3 className={classes.title}>{props.title}</h3>
    </div>
  );
}
