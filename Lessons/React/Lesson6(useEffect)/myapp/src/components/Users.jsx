import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  function delUser(id) {
    setUsers(users.filter((elem) => elem.id !== id));
  }

  return (
    <div>
      <ul>
        {users.map((elem) => (
          <li onDoubleClick={() => delUser(elem.id)} key={elem.id}>
            {elem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
