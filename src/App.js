import React from 'react';
import './App.scss';

import Puzzle from './components/puzzle/puzzle';
import ImageSwitcher from './components/switcher/switcher';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzleArray, selectPreview, selectPreviewState, selectPuzzle } from './redux/puzzle/puzzle.selectors';
import { puzzleColor } from './data/data';

function App({ puzzleArray, preview, isPreview, puzzle }) {
  let isSolved = !isPreview && puzzleArray && preview.join("") === puzzleArray.join("");
  return (
    <div className="App">
      <header className="App-header" style={{ background: `${puzzleColor[puzzle]}` }}>
        <h1>Puzzle</h1>
      </header>
      <div className="main-container">
        <ImageSwitcher
          isSolved={isSolved}
        />
        <div className="game-container">
          <div className="solved-puzzle">
            {isSolved && <h2>{`Well done..!! You solved ${puzzle.toUpperCase()}`}</h2>}
          </div>
          <Puzzle
            isSolved={isSolved}
          />
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  puzzleArray: selectPuzzleArray,
  preview: selectPreview,
  isPreview: selectPreviewState,
  puzzle: selectPuzzle,
});


export default connect(mapStateToProps, null)(App);
