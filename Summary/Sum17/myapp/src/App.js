import './App.css';
import { useState, useEffect } from 'react';
import UsersContainer from './components/UsersContainer/UsersContainer';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  console.log(users);
  return (
    <div className="App">
      <UsersContainer users={users} />
    </div>
  );
}

export default App;
