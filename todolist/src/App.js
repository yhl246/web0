import logo from './logo.svg';
import './App.css';

function WelcomeMessage() {
  return <p>Welcome! Look</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        <a
          className="App-link"
          href="https://github.com/yhl246"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
      </header>
    </div>
  );
}


export default App;
