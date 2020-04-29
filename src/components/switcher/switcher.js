import React from 'react';
import './switcher.scss';

import pikachu from '../../images/pikachu.png';
import bob from '../../images/bob.png';
import numbers from '../../images/numbers.png';

import { connect } from 'react-redux';
import { setPuzzle, setPuzzleArray } from '../../redux/puzzle/puzzle.action';


function ImageSwitcher({ updatePuzzle, updatePuzzleArray }) {
  const switchArray = [
    {
      "url": numbers,
      "name": "numbers"
    },
    {
      "url": pikachu,
      "name": "pikachu"
    },
    {
      "url": bob,
      "name": "bob"
    }
  ];

  const handleClick = (target) => {
    updatePuzzle(target.id)
  }

  return (
    <div className="switcher">
      {switchArray.map((item, index) => {
        return (
          <img
            id={item.name}
            className="images"
            src={item.url}
            alt={`of ${item}`}
            key={`image-${index}`}
            onClick={(event) => handleClick(event.target)}
          />
        )
      })}
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  updatePuzzle: (puzzle) => dispatch(setPuzzle(puzzle)),
});

// const mapStateToProps = createStructuredSelector({
//   puzzleArray: selectPuzzleArray,
//   puzzle: selectPuzzle,
// });



export default connect(null, mapDispatchToProps)(ImageSwitcher);