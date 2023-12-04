import React, { useState } from 'react';
import SimpleParagraph from '../simpleParagraph/SimpleParagraph';

export default function LoginForm({ userName, newUserData }) {
  // const [login, setLogin] = useState('');
  // const [passwd, setPasswd] = useState('');

  const [userDataObj, setUserDataObj] = useState({});

  const [error, setError] = useState('');

  const [attempts, setAttempts] = useState([]);

  return (
    <div>
      <input
        value={userDataObj.login}
        onChange={(event) => {
          setUserDataObj((oldState) => ({
            ...oldState,
            login: event.target.value,
          }));
        }}
        placeholder="Login"
        type="text"
        className="input"
      />

      <input
        value={userDataObj.passwd}
        onChange={(event) => {
          setUserDataObj((oldState) => ({
            ...oldState,
            passwd: event.target.value,
          }));
        }}
        placeholder="Password"
        type="password"
        className="input"
      />

      {error && <SimpleParagraph text={error} />}

      <button
        onClick={() => {
          if (!userDataObj.login || !userDataObj.passwd) {
            setError('Fill all fields!');
          } else {
            const attemptData = {
              id: Date.now(),
              login: userDataObj.login,
              pwd: userDataObj.passwd,
            };
            setAttempts([...attempts, attemptData]);

            newUserData([...attempts, attemptData]);

            setError('');
            userName(userDataObj.login);
            console.log('Form state: ', userDataObj);
          }
        }}
      >
        Enter
      </button>
    </div>
  );
}
