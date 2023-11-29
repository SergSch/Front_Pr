import React, { useState } from 'react';

export default function String() {
  const [theme, setTheme] = useState('light');
  const themeHandler = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  };

  const light = {
    backgroundColor: 'gray',
    color: 'black',
  };

  const dark = {
    backgroundColor: 'darkblue',
    color: 'white',
  };

  const style = theme == 'light' ? light : dark;

  return (
    <div style={style}>
      <h1>Theme</h1>
      <h2>{theme}</h2>
      <button onClick={themeHandler}>Click!</button>
    </div>
  );
}
