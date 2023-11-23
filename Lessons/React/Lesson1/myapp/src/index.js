import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return (
    <div className="test">
      <h1 id="elem1">
        Hello World
        <Button />
      </h1>
    </div>
  );
}

function Button() {
  return (
    <>
      <button>Some Button!</button>
      <div>123</div>
    </>
  );
}
