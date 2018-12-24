import React, { Component } from 'react';
import Login from '../src/containers/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
         <h1>sport card generator</h1>
        </header>
        <Login/>
      </div>
    );
  }
}

export default App;
