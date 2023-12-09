import React from 'react';
import classes from './CardItem.module.css';
import { GiCrossedSabres } from 'react-icons/gi';

export default function CardItem({
  id,
  rus,
  eng,
  language,
  changeWordLang,
  deleteW,
}) {
  const card_text = language === 'en' ? eng : rus;
  const styles = {
    backgroundColor: language === 'en' ? '#2980B9' : 'white',
    color: language === 'en' ? 'white' : 'black',
  };

  const deleteWord = (event) => {
    deleteW(id);
    event.stopPropagation();
  };

  return (
    <div
      className={classes.item}
      style={styles}
      onClick={() => changeWordLang(id)}
    >
      <GiCrossedSabres className={classes.closeIcon} onClick={deleteWord} />
      <p>{card_text}</p>
    </div>
  );
}
