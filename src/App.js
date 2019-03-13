import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // renderizando elemento
    const h1 = React.createElement('h1', { name: 'matheus'}, 'H1 REACT')
    // criar elementos alinhados
    const h2 = React.createElement('h1', { name: 'matheus'}, [ React.createElement('span', null, 'Texto span'), React.createElement('br', null),  React.createElement('span', null, 'Texto span 2') ])
    // Abaixo JSX
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
          {h1}
          {h1.props.name}
          {h2}
        </header>
      </div>
    );
  }
}

export default App;
