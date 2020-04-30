import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzle, selectPreview, selectTempArr, selectPuzzleArray, selectSwitcherState } from '../../redux/puzzle/puzzle.selectors';
import { setSwitcherState, setPuzzle, setPreview, setTempArray, setIsPreviewState } from '../../redux/puzzle/puzzle.action';

import './switcher.scss';
import { switchArray } from '../../data/data';
import Arrow from '../../images/downloading.png'

function ImageSwitcher({ updatePuzzle, updateTempArray, updatePreviewState, updateSwitcherState, previewPuzzleArray, preview, tempArr, puzzle, puzzleArray, isSolved, isSwitcherOpen }) {
  const handleClick = (target) => {
    updatePuzzle(target.id);
    updateSwitcherState(isSwitcherOpen)
  }

  const toggleSwitcher = () => {
    updateSwitcherState(isSwitcherOpen)
  }

  return (
    <div className="switcher">
      {isSwitcherOpen && <div className="switcher-container">
        {switchArray.map((item, index) => {
          return (
            <div className="puzzle-images"
              key={`image-${index}`}
            >
              <img
                id={item.name}
                className="images"
                src={item.url}
                alt={`of ${item}`}
                onClick={(event) => handleClick(event.target)}
              />
            </div>
          )
        })}
      </div>}
      <img
        className={`downloading ${isSwitcherOpen ? "arrowup" : ""}`}
        src={Arrow}
        alt="arrow down"
        onClick={() => toggleSwitcher()} />
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  updatePuzzle: (puzzle) => dispatch(setPuzzle(puzzle)),
  updateTempArray: (puzzleArray) => dispatch(setTempArray(puzzleArray)),
  previewPuzzleArray: (puzzleArray) => dispatch(setPreview(puzzleArray)),
  updatePreviewState: (puzzleArray) => dispatch(setIsPreviewState(puzzleArray)),
  updateSwitcherState: (switcherState) => dispatch(setSwitcherState(switcherState)),

});

const mapStateToProps = createStructuredSelector({
  preview: selectPreview,
  tempArr: selectTempArr,
  puzzle: selectPuzzle,
  puzzleArray: selectPuzzleArray,
  isSwitcherOpen: selectSwitcherState
});



export default connect(mapStateToProps, mapDispatchToProps)(ImageSwitcher);