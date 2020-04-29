import React, { useState, useEffect } from 'react';

import './puzzle.scss';

import Box from '../box/box';
import data from '../../data/data.json';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPuzzleArray, selectPuzzle } from '../../redux/puzzle/puzzle.selectors';
import { setPuzzleArray } from '../../redux/puzzle/puzzle.action';



function Puzzle({ puzzleArray, updatePuzzleArray, puzzle }) {
  const [puzzleNumber, setPuzzleNumber] = useState()
  const [directionToMove, setDirectionToMove] = useState("");
  const puzzleArrayMap = [];
  let x = 16;

  useEffect(() => {
    if (!puzzleArray.length) {
      console.log("hiiiiii");
      while (x > 0) {
        let rendomeIndex = Math.floor(Math.random() * puzzleArray.length);
        let rendomeValue = puzzleArray[rendomeIndex];
        puzzleArrayMap.indexOf(rendomeValue) === -1 ?
          puzzleArrayMap.push(rendomeValue) : x++;
        x--;
      }
      if (!x) {
        updatePuzzleArray([...puzzleArrayMap])
      }
    }
  }, [puzzle])

  const handleClick = (target) => {
    let boxToMove = Number(target.id);
    let tempArr = [...puzzleArray];
    let indexClick = tempArr.indexOf(boxToMove);
    let indexEmpty = tempArr.indexOf("");

    if (indexClick - indexEmpty === 4) {
      tempArr.splice(indexEmpty, 1, boxToMove);
      tempArr.splice(indexClick, 1, "");
      setDirectionToMove("move-top")
      setPuzzleNumber(boxToMove);
    }
    if (indexClick - indexEmpty === -4) {
      tempArr.splice(indexEmpty, 1, boxToMove);
      tempArr.splice(indexClick, 1, "");
      setDirectionToMove("move-down")
      setPuzzleNumber(boxToMove);
    }

    if (indexClick - indexEmpty === 1) {
      if (!isItFirstOrLast(indexClick, indexEmpty)) {
        tempArr.splice(indexEmpty, 1, boxToMove);
        tempArr.splice(indexClick, 1, "");
      }
      setDirectionToMove("move-left")
      setPuzzleNumber(boxToMove);
    }
    if (indexClick - indexEmpty === -1) {
      if (!isItFirstOrLast(indexClick, indexEmpty)) {
        tempArr.splice(indexEmpty, 1, boxToMove);
        tempArr.splice(indexClick, 1, "");
      }
      setDirectionToMove("move-right")
      setPuzzleNumber(boxToMove);
    }
    updatePuzzleArray([...tempArr])
  }

  const isItFirstOrLast = (index, empty) => {
    if (index === 3 && empty === 4 || index === 7 && empty === 8 || index === 11 && empty === 12) {
      return true;
    }
    if (index === 4 && empty === 3 || index === 8 && empty === 7 || index === 12 && empty === 11) {
      return true;
    }
  }


  return (
    <div className="puzzle-container">
      {puzzleArray.map((item, index) => {
        return (
          puzzleNumber === item ?
            <Box
              value={item}
              onClick={handleClick}
              key={`box-${index}`}
              moveTo={directionToMove}
              imageUrl={data[puzzle][`part${item}`]}
            />
            :
            <Box
              value={item}
              onClick={handleClick}
              key={`box-${index}`}
              imageUrl={data[puzzle][`part${item}`]}
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
});


export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);
