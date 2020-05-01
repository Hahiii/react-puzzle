import React, { useState, useEffect } from 'react';

import './puzzle.scss';

import Box from '../box/box';
import data from '../../data/data.json';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzleArray, selectPuzzle, selectPreview } from '../../redux/puzzle/puzzle.selectors';
import { setPuzzleArray } from '../../redux/puzzle/puzzle.action';



function Puzzle({ puzzleArray, updatePuzzleArray, puzzle, preview, isSolved, isDone }) {
  const [puzzleNumber, setPuzzleNumber] = useState()
  const [directionToMove, setDirectionToMove] = useState("");
  const puzzleArrayMap = [];
  let x = preview.length;

  useEffect(() => {
    if (!puzzleArray && puzzle) {
      while (x > 0) {
        let rendomeIndex = Math.floor(Math.random() * preview.length);
        let rendomeValue = preview[rendomeIndex];
        puzzleArrayMap.indexOf(rendomeValue) === -1 ?
          puzzleArrayMap.push(rendomeValue) : x++;
        x--;
      }
      updatePuzzleArray({ name: puzzle, array: [...puzzleArrayMap] })
    }
  }, [puzzle])

  const handleClick = (target) => {
    let boxToMove = Number(target.id);
    let tempArr = [...puzzleArray];
    let indexClick = tempArr.indexOf(boxToMove);
    let indexEmpty = tempArr.indexOf("x");

    if (indexClick - indexEmpty === 4) {
      tempArr.splice(indexEmpty, 1, boxToMove);
      tempArr.splice(indexClick, 1, "x");
      setDirectionToMove("move-top")
      setPuzzleNumber(boxToMove);
    }
    if (indexClick - indexEmpty === -4) {
      tempArr.splice(indexEmpty, 1, boxToMove);
      tempArr.splice(indexClick, 1, "x");
      setDirectionToMove("move-down")
      setPuzzleNumber(boxToMove);
    }

    if (indexClick - indexEmpty === 1) {
      if (!isItFirstOrLast(indexClick, indexEmpty)) {
        tempArr.splice(indexEmpty, 1, boxToMove);
        tempArr.splice(indexClick, 1, "x");
        setDirectionToMove("move-left")
        setPuzzleNumber(boxToMove);
      }
    }
    if (indexClick - indexEmpty === -1) {
      if (!isItFirstOrLast(indexClick, indexEmpty)) {
        tempArr.splice(indexEmpty, 1, boxToMove);
        tempArr.splice(indexClick, 1, "x");
        setDirectionToMove("move-right")
        setPuzzleNumber(boxToMove);
      }
    }
    updatePuzzleArray({ name: puzzle, array: [...tempArr] })
  }

  const isItFirstOrLast = (index, empty) => {
    if ((index === 3 && empty === 4) || (index === 7 && empty === 8) || (index === 11 && empty === 12)) {
      return true;
    }
    if ((index === 4 && empty === 3) || (index === 8 && empty === 7) || (index === 12 && empty === 11)) {
      return true;
    }
  }

  const handleAnimation = () => {
    setPuzzleNumber();
  }
  
  return (
    <div className="puzzle-container">
      {puzzle && puzzleArray && puzzleArray.map((item, index) => {
        return (
          <Box
            value={parseInt(item) ? item : ""}
            onClick={isDone.indexOf(puzzle) === -1 ? handleClick : null}
            onAnimationEnd={handleAnimation}
            key={`box-${index}`}
            imageUrl={data[puzzle][`part${item}`]}
            moveTo={puzzleNumber === item ? directionToMove : null}
            isSolved={isSolved}
          />
        )
      })
      }
    </div >
  )
}

const mapDispatchToProps = dispatch => ({
  updatePuzzleArray: (puzzleArray) => dispatch(setPuzzleArray(puzzleArray)),
});

const mapStateToProps = createStructuredSelector({
  puzzleArray: selectPuzzleArray,
  puzzle: selectPuzzle,
  preview: selectPreview,
});


export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);
