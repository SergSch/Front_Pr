import React from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import SimpleInput from './components/input/SimpleInput';
import SimpleList from './components/simpleList/SimpleList';
import ComplicatedList from './components/complicatedList/ComplicatedList';

function App() {
  let paragraphClick = () => {
    console.log('Клик на параграф');
  };
  function renderValue(event) {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <SimpleParagraph
        text="Simple Paragraph"
        styles={{ textColor: 'red', fontSize: '18px' }}
        onClick={paragraphClick}
      />
      <SimpleInput onChange={renderValue} />
      <SimpleList />

      <ComplicatedList />
    </div>
  );
}

export default App;
