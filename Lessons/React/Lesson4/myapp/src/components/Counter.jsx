import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function promtCount() {
    let promt = +prompt();
    if (isNaN(promt)) {
      alert('not number');
    } else {
      setCount(promt);
    }
  }

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change count</button>
      <button onClick={() => setCount(count - 1)}>Change count</button>
      <button onClick={() => setCount(0)}>Change count</button>
      <button onClick={promtCount}>Change count</button>
    </div>
  );
}

export default Counter;
