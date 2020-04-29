import { PuzzleActionTypes } from './puzzle.types';


export const setPuzzleArray = puzzleArray => ({
  type: PuzzleActionTypes.SET_PUZZLE_ARRAY,
  payload: puzzleArray
});

export const setPuzzle = puzzle => ({
  type: PuzzleActionTypes.SET_PUZZLE,
  payload: puzzle
});

export const setPreview = puzzleObj => ({
  type: PuzzleActionTypes.SET_PREVIEW_ARRAY,
  payload: puzzleObj
});

export const setTempArray = tempArray => ({
  type: PuzzleActionTypes.SET_TEMP_ARRAY,
  payload: tempArray
});

export const setIsPreviewState = previewState => ({
  type: PuzzleActionTypes.SET_PREVIEW_STATE,
  payload: previewState
});



