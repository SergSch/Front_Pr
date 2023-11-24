import React from 'react';
import SecondBlockL from './secondScrLeft/SecondBlockL';
import SecondBlockR from './secondScrRight/SecondBlockR';
import classes from './SecondBlock.module.css';

export default function SecondBlock() {
  return (
    <div className={classes.second_block}>
      <SecondBlockL />
      <SecondBlockR />
    </div>
  );
}
