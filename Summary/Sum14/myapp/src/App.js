import './App.css';
// import UsersContainer from './components/UsersContainer';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
    <div>
      <h2>Heading</h2>
      <p>Hello World</p>
      <a href="https://google.de">link</a>

      <ProductsContainer />
      {/* <UsersContainer /> */}
    </div>
  );
}

export default App;
