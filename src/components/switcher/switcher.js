import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzle, selectSwitcherState } from '../../redux/puzzle/puzzle.selectors';
import { setSwitcherState, setPuzzle } from '../../redux/puzzle/puzzle.action';

import './switcher.scss';
import { switchArray, puzzleColor } from '../../data/data';


import Arrow from '../../images/downloading.png'
import DoneSign from '../donesign/done';

function ImageSwitcher({ updatePuzzle, updateSwitcherState, isSwitcherOpen, puzzle, isSolved }) {

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
              {puzzle === item.name && isSolved && <DoneSign
                className="donesign"
                outerColor={"green"}
                innerColor={puzzleColor[item.name]}
              />}
              <img
                id={item.name}
                className="images"
                src={item.url}
                alt={`of ${item}`}
                onClick={(event) => handleClick(event.target)}
              />
              <div>
              </div>
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
  updateSwitcherState: (switcherState) => dispatch(setSwitcherState(switcherState)),

});

const mapStateToProps = createStructuredSelector({
  puzzle: selectPuzzle,
  isSwitcherOpen: selectSwitcherState,
});



export default connect(mapStateToProps, mapDispatchToProps)(ImageSwitcher);