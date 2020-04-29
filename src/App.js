import React from 'react';
import './App.scss';

import Puzzle from './components/puzzle/puzzle';
import ImageSwitcher from './components/switcher/switcher';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPreview, selectTempArr, selectPuzzle } from './redux/puzzle/puzzle.selectors';
import { setPreview } from './redux/puzzle/puzzle.action';



function App({ preview, previewPuzzleArray, tempArr, puzzle }) {
  const handleMouseEnter = () => {
    previewPuzzleArray({ name: puzzle, array: [...preview] })
  }

  const handleMouseLeave = () => {
    previewPuzzleArray({ name: puzzle, array: [...tempArr] })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Puzzle</h1>
      </header>
      <ImageSwitcher />
      <Puzzle />
      {puzzle && <span
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}>Preview</span>}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  previewPuzzleArray: (puzzleArray) => dispatch(setPreview(puzzleArray)),
});

const mapStateToProps = createStructuredSelector({
  preview: selectPreview,
  tempArr: selectTempArr,
  puzzle: selectPuzzle
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

