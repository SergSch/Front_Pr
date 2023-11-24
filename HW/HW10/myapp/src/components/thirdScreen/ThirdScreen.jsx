import React from 'react';
import classes from './ThirdScreen.module.css';

export default function ThirdScreen() {
  return (
    <div className={classes.wrap}>
      <div className={classes.text}>
        <p>
          Приехав к нам однажды, многие наши клиенты становятся постоянными, а
          часть из них даже друзьями.
        </p>
        <br />

        <p>
          А также в нашей мастерской можно отремонтировать электросамокат и
          электровелосипед.
        </p>
      </div>
    </div>
  );
}
