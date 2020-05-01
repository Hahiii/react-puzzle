import React, { useState } from 'react';
import './App.scss';

import Puzzle from './components/puzzle/puzzle';
import ImageSwitcher from './components/switcher/switcher';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTempArr, selectPuzzleArray, selectPreview, selectPreviewState, selectPuzzle } from './redux/puzzle/puzzle.selectors';
import { setStateToInit, setPreview, setTempArray, setPuzzleArray, setIsPreviewState } from './redux/puzzle/puzzle.action';
import { puzzleColor } from './data/data';

function App({ resetStateToInit, previewPuzzleArray, updatePuzzleArray, updateTempArray, updatePreviewState, puzzleArray, preview, isPreview, puzzle, tempArr }) {
  let isSolved = !isPreview && puzzleArray && preview.join("") === puzzleArray.join("");
  let [canClikck, setCanClikck] = useState(true);
  const handlePreviewClick = (event) => {
    event.preventDefault()
    previewPuzzleArray({ name: puzzle, array: [...preview] });
    updateTempArray([...puzzleArray]);
    updatePreviewState(true);
    setCanClikck(false);
    let timeout = setTimeout(() => {
      updatePuzzleArray({ name: puzzle, array: [...tempArr] });
      updatePreviewState(false);
      setCanClikck(true);
      clearTimeout(timeout);
    }, 1500);
  }

  const resetState = () => {
    resetStateToInit()
  }



  return (
    <div className="App">
      <header className="App-header" style={{ background: `${puzzleColor[puzzle]}` }}>
        <h1 onClick={() => resetState()}>Puzzle</h1>
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
        {puzzle &&
          <button className="preview"
            disabled={!canClikck}
            onClick={(event) => handlePreviewClick(event)}
          >Preview {isSolved}</button>

        }
      </div>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  puzzleArray: selectPuzzleArray,
  preview: selectPreview,
  isPreview: selectPreviewState,
  puzzle: selectPuzzle,
  tempArr: selectTempArr
});

const mapDispatchToProps = dispatch => ({
  updateTempArray: (puzzleArray) => dispatch(setTempArray(puzzleArray)),
  previewPuzzleArray: (puzzleArray) => dispatch(setPreview(puzzleArray)),
  updatePreviewState: (previewState) => dispatch(setIsPreviewState(previewState)),
  updatePuzzleArray: (puzzleArray) => dispatch(setPuzzleArray(puzzleArray)),
  resetStateToInit: (puzzleArray) => dispatch(setStateToInit(puzzleArray))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
