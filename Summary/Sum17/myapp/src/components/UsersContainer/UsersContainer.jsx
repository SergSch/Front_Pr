import React from 'react';
import UserCard from '../UserCard/UserCard';

export default function UsersContainer({ users }) {
  return (
    <div>
      {users.map((elem) => (
        <UserCard key={elem.id} {...elem} />
      ))}
    </div>
  );
}
