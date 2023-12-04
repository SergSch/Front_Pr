import React from 'react';
import classes from './CardItem.module.css';

export default function CardItem({ id, rus, eng, language }) {
  const card_text = language === 'en' ? eng : rus;
  const styles = {
    backgroundColor: language === 'en' ? '#2980B9' : 'white',
    color: language === 'en' ? 'white' : 'black',
  };

  return (
    <div className={classes.item} style={styles}>
      {card_text}
    </div>
  );
}
