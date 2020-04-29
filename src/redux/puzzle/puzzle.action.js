import { PuzzleActionTypes } from './puzzle.types';


export const setPuzzleArray = puzzleArray => ({
  type: PuzzleActionTypes.SET_PUZZLE_ARRAY,
  payload: puzzleArray
});


export const setPuzzle = puzzle => ({
  type: PuzzleActionTypes.SET_PUZZLE,
  payload: puzzle
});



