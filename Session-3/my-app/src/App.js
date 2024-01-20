import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome <b>{props.name}</b> to React Classes
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React Component.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
