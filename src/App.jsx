import logo from "./logo.svg";
import bun from '../public/bun.gif'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bun} alt="logo" />
        <h3>Getting started with Bun JS</h3>
        <a
          className="App-link"
          href="https://bun.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bun JS documentation
        </a>
      </header>
    </div>
  );
}

export default App;
