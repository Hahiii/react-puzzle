import React, { useState, useEffect } from 'react';
import './puzzle.scss';

import Box from '../box/box';

function Puzzle() {
  const [gamePuzzle, setGamePuzzle] = useState([])
  const [puzzleNumber, setPuzzleNumber] = useState()
  const [directionToMove, setDirectionToMove] = useState("");
  const puzzleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
  const puzzleArrayMap = [];
  let x = puzzleArray.length;
  useEffect(() => {
    while (x > 0) {
      let rendomeIndex = Math.floor(Math.random() * puzzleArray.length);
      let rendomeValue = puzzleArray[rendomeIndex];
      puzzleArrayMap.indexOf(rendomeValue) === -1 ?
        puzzleArrayMap.push(rendomeValue) : x++;
      x--;
    }
    if (!x) {
      setGamePuzzle([...puzzleArrayMap])
    }
  }, [])

  const handleClick = (target) => {
    let boxToMove = Number(target.innerText);
    let tempArr = [...gamePuzzle];
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
    setGamePuzzle([...tempArr])
  }

  const isItFirstOrLast = (index, empty) => {
    console.log(index);
    if (index === 3 && empty === 4 || index === 7 && empty === 8 || index === 11 && empty === 12) {
      return true;
    }
    if (index === 4 && empty === 3 || index === 8 && empty === 7 || index === 12 && empty === 11) {
      return true;
    }
  }


  return (
    <div className="puzzle-container">
      {gamePuzzle.map((item, index) => {
        return (
          puzzleNumber === item ?
            <Box
              value={item}
              onClick={handleClick}
              key={`box-${index}`}
              moveTo={directionToMove}
            />
            :
            <Box
              value={item}
              onClick={handleClick}
              key={`box-${index}`}
            />
        )
      })
      }
    </div >
  )
}

export default Puzzle;