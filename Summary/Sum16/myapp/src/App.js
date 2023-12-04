import { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { words_data } from './data/words_data.js';
import Triggers from './components/Triggers/Triggers';
import Form from './components/form/Form.jsx';

function App() {
  const [words, setWords] = useState(words_data);

  const changeToEng = () => {
    setWords(
      words.map((elem) => {
        elem.language = 'en';
        return elem;
      })
    );
  };

  const changeToRus = () => {
    setWords(
      words.map((elem) => {
        elem.language = 'ru';
        return elem;
      })
    );
  };
  const createPost = (newWord) => {
    setWords([...words, newWord]);
  };

  return (
    <div>
      <Form create={createPost} />
      <CardsContainer words_data={words} />
      <Triggers changeToEng={changeToEng} changeToRus={changeToRus} />
    </div>
  );
}

export default App;
