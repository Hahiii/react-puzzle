import React from 'react';
import './App.scss';

import Puzzle from './components/puzzle/puzzle';
import ImageSwitcher from './components/switcher/switcher';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzleArray, selectPreview, selectPreviewState, selectPuzzle } from './redux/puzzle/puzzle.selectors';


function App({ puzzleArray, preview, isPreview, puzzle }) {
  let isSolved = !isPreview && puzzleArray && preview.join("") === puzzleArray.join("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Puzzle</h1>
      </header>
      <ImageSwitcher
        isSolved={isSolved}
      />
      <div className="solved-puzzle">
        {isSolved && <h3>{`Well done..!! You solved ${puzzle.toUpperCase()}`}</h3>}
      </div>
      <Puzzle
        isSolved={isSolved}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  puzzleArray: selectPuzzleArray,
  preview: selectPreview,
  isPreview: selectPreviewState,
  puzzle: selectPuzzle,
});


export default connect(mapStateToProps, null)(App);
