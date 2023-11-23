import React from 'react';
import User from './User';

export default function UsersContainer() {
  return (
    <div>
      <User firstname="Oleg" lastname="Cas" age="20" />
      <User firstname="Pit" lastname="Sampr" age="30" />
      <User firstname="Stiv" lastname="Berk" age="40" />
    </div>
  );
}
