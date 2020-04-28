import React from 'react';
import './App.scss';

import Puzzle from './components/game/puzzle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Puzzle</h1>
      </header>
      <Puzzle />
    </div>
  );
}

export default App;
