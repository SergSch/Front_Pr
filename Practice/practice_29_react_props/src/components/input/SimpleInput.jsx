import React from 'react';

export default function SimpleInput({ onChange }) {
  return (
    <div>
      <input type="text" placeholder="Put your text" onChange={onChange} />
    </div>
  );
}
