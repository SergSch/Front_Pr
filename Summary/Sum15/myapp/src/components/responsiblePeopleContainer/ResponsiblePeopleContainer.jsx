import React from 'react';
import ResponsiblePeaopleItem from '../responsiblePeopleItem/ResponsiblePeaopleItem';

export default function ResponsiblePeopleContainer({ people }) {
  return (
    <div>
      <p>Responsible people:</p>
      {people.length == 0 ? (
        <p>Nobody</p>
      ) : (
        people.map((elem) => (
          <ResponsiblePeaopleItem key={elem} firstname={elem} />
        ))
      )}
    </div>
  );
}
