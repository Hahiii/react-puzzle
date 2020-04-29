import { PuzzleActionTypes } from './puzzle.types';


export const setPuzzleArray = puzzleArray => ({
  type: PuzzleActionTypes.SET_PUZZLE_ARRAY,
  payload: puzzleArray
});

export const setPuzzle = puzzleObj => ({
  type: PuzzleActionTypes.SET_PUZZLE,
  payload: puzzleObj
});

export const setPreview = puzzleObj => ({
  type: PuzzleActionTypes.SET_PREVIEW_ARRAY,
  payload: puzzleObj
});



