import React from 'react';

export default function UserCard({ name, username }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
    </div>
  );
}
