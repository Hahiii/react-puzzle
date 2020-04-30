import { PuzzleActionTypes } from './puzzle.types';

const INITIAL_STATE = {
  puzzle: "",
  pikachu: null,
  bob: null,
  micky: null,
  minne: null,
  donald: null,
  melman: null,
  minion: null,
  monsters: null,
  bird: null,
  numbers: null,
  preview: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "x"],
  isPreview: false
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
        [action.payload.name]: [...action.payload.array],
        tempArr: [...action.payload.array]
      }

    case PuzzleActionTypes.SET_PREVIEW_ARRAY:
      return {
        ...state,
        [action.payload.name]: [...action.payload.array],
      }

    case PuzzleActionTypes.SET_TEMP_ARRAY:
      return {
        ...state,
        tempArr: [...action.payload],
      }
    case PuzzleActionTypes.SET_PREVIEW_STATE:
      return {
        ...state,
        isPreview: action.payload,
      }
    default:
      return state;
  }
}
