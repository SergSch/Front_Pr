import './App.css';
import FifthBlock from './components/fifthScreen/FifthBlock';
import FirstBlock from './components/firstScreen/FirstBlock';
import FourthScreenContainer from './components/fourthScreen/fourthScreenContainer/FourthScreenContainer';
import SecondBlock from './components/secondScreen/SecondBlock';
import ThirdScreen from './components/thirdScreen/ThirdScreen';

function App() {
  return (
    <div>
      <FirstBlock />
      <SecondBlock />
      <ThirdScreen />
      <FourthScreenContainer />
      <FifthBlock />
    </div>
  );
}

export default App;
