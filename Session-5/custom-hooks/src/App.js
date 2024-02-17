import logo from './logo.svg';
import './App.css';
import { useCounter } from './useCounter';

function App() {

  const {count,increment,decrement} = useCounter(0);


  return (
    <div className="App">
      <h1>Count = {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
