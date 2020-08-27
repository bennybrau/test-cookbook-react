import React from 'react';
import logo from './logo.svg';
import { Square } from '@gh/cookbook-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Square>
          This is a Cookbook Square!!
          </Square>
      </header>
    </div>
  );
}

export default App;
