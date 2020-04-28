import React from 'react';
import './App.scss';
import ImageUrl from './images/pikachu.png';
import Puzzle from './components/puzzle/puzzle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Puzzle</h1>
      </header>
      <Puzzle />
      <img className="img-expo" src={ImageUrl} alt="" />
    </div>
  );
}

export default App;
