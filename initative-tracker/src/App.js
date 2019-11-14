import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

/*TODO
> Find Game
> Create Game
> Create Password
> Select player or DM

Player options
> Enter Name
> Enter Initiative
> End turn

DM Options
> Add multiple Monsters
> Start Combat, generating turn display.

Computer Things
> React Front End
> Express Server
> Firebase for live updates

*/ 


// const createGame = (gameName, password) => {
    
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

