import React, { useEffect, useState } from 'react';
import UnMount from './UnMount';

export default function Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   useEffect(() => {
  //     console.log('Montage (or reloading)');
  //   }, []);

  //   useEffect(() => {
  //     console.log('Montage (or reloading count1)');
  //   }, [count1]);

  //   useEffect(() => {
  //     console.log('Montage (or reloading count2)');
  //   }, [count2]);

  //   useEffect(() => {
  //     console.log('Montage (or reloading count2)');
  //   }, [count1, count2]);

  return (
    <div>
      {/* Example
      <p>{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click</button>
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Click</button>
      {count1 < 3 && <UnMount />} */}
    </div>
  );
}
