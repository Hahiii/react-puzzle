import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzle, selectPreview, selectTempArr, selectPuzzleArray } from '../../redux/puzzle/puzzle.selectors';
import { setPuzzle, setPreview, setTempArray } from '../../redux/puzzle/puzzle.action';

import './switcher.scss';
import pikachu from '../../images/pikachu.png';
import bob from '../../images/bob.png';
import numbers from '../../images/numbers.png';
import monsters from '../../images/monsters.png';
import bird from '../../images/bird.png';

function ImageSwitcher({ updatePuzzle, updateTempArray, previewPuzzleArray, preview, tempArr, puzzle, puzzleArray }) {
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
    },
    {
      "url": monsters,
      "name": "monsters"
    },
    {
      "url": bird,
      "name": "bird"
    }
  ];

  const handleClick = (target) => {
    updatePuzzle(target.id);
  }

  const handleMouseEnter = (target) => {
    previewPuzzleArray({ name: puzzle, array: [...preview] })
    updateTempArray([...puzzleArray])
  }

  const handleMouseLeave = () => {
    previewPuzzleArray({ name: puzzle, array: [...tempArr] })
  }

  return (
    <div className="switcher">
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
            {item.name === puzzle && <span
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >Preview</span>}
          </div>
        )
      })}
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  updatePuzzle: (puzzle) => dispatch(setPuzzle(puzzle)),
  updateTempArray: (puzzleArray) => dispatch(setTempArray(puzzleArray)),
  previewPuzzleArray: (puzzleArray) => dispatch(setPreview(puzzleArray)),
});

const mapStateToProps = createStructuredSelector({
  preview: selectPreview,
  tempArr: selectTempArr,
  puzzle: selectPuzzle,
  puzzleArray: selectPuzzleArray
});



export default connect(mapStateToProps, mapDispatchToProps)(ImageSwitcher);