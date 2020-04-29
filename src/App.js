import React from 'react';
import './App.scss';

import Puzzle from './components/puzzle/puzzle';
import ImageSwitcher from './components/switcher/switcher';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Puzzle</h1>
      </header>
      <ImageSwitcher />
      <Puzzle />
    </div>
  );
}

export default App;
