import React, { useState } from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleInput from './components/input/SimpleInput.jsx';
import Greeting from './components/Greeting/Greeting.jsx';

function App() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  function deleteUser(id) {
    const newData = userData.filter((elem) => elem.id !== id);
    setUserData(newData);
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm userName={setUserName} newUserData={setUserData} />

      <Greeting userName={userName} />

      {userData.map((elem) => (
        <SimpleParagraph
          onClick={() => deleteUser(elem.id)}
          key={elem.id}
          text={`Login: ${elem.login} Password: ${elem.passwd}`}
        />
      ))}
    </div>
  );
}

export default App;
