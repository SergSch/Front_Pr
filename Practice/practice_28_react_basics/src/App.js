import logo from './logo.svg';
import './App.css';

function App() {
  let randomValue = Math.random();

  return (
    <>
      <div className="App">
        {randomValue > 0.5 ? <h1>Heading1</h1> : <h2>Heading2</h2>}
        <p>Hello World from React! {new Date().toLocaleString()}</p>
        <SimpleParagraph />
        <LoginForm />
      </div>
    </>
  );
}

function SimpleParagraph() {
  return <p>Simple Paragraph!</p>;
}

function LoginForm() {
  return (
    <div>
      <input type="text" placeholder="Login" />
      <input type="password" placeholder="Password" />
      <button>Enter</button>
    </div>
  );
}

export default App;
