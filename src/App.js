import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My resume build with React</h1>
        </header>
        <div>
          <p>
            Everything is working as expected
          </p>
        </div>
      </div>
    );
  }
}

export default App;
