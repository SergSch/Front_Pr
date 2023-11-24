import React from 'react';
import FifthBlockL from './fifthBlockL/FifthBlockL';
import FifthBlockR from './fifthBlockR/FifthBlockR';
import classes from './FifthBlock.css';

export default function FifthBlock() {
  return (
    <div className="fifth_block">
      <FifthBlockL />
      <FifthBlockR />
    </div>
  );
}
