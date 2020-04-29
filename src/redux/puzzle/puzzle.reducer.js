import { PuzzleActionTypes } from './puzzle.types';

const INITIAL_STATE = {
  puzzle: "pikachu",
  puzzleArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]
}

export const puzzleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PuzzleActionTypes.SET_PUZZLE:
      return {
        ...state,
        puzzle: action.payload,
      }
    case PuzzleActionTypes.SET_PUZZLE_ARRAY:
      return {
        ...state,
        puzzleArray: action.payload
      }
    default:
      return state;
  }
}
