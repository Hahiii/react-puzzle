import { PuzzleActionTypes } from './puzzle.types';

const INITIAL_STATE = {
  puzzle: "",
  pikachu: null,
  bob: null,
  micky: null,
  minne: null,
  donald: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "x", 15],
  melman: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "x", 15],
  minion: null,
  cricket: null,
  monsters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "x", 15],
  bird: null,
  numbers: null,
  preview: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "x"],
  isPreview: false,
  isOpen: true,
  isDone: []

}

export const puzzleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PuzzleActionTypes.SET_PUZZLE:
      return {
        ...state,
        puzzle: action.payload,
      }

    case PuzzleActionTypes.SET_PUZZLE_ARRAY:
      let arr = [];
      if (state.preview.join("") === action.payload.array.join("") && state.isDone) {
        arr = [...state.isDone, action.payload.name]
      };

      return {
        ...state,
        [action.payload.name]: [...action.payload.array],
        tempArr: [...action.payload.array],
        isDone: arr && [...arr]
      }

    case PuzzleActionTypes.SET_PREVIEW_ARRAY:

      return {
        ...state,
        [action.payload.name]: [...action.payload.array]
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
    case PuzzleActionTypes.SET_SWITCHER_STATE:
      return {
        ...state,
        isOpen: !action.payload,
      }
    case PuzzleActionTypes.SET_STATE_TO_INIT:
      return {
        ...INITIAL_STATE
      }
    default:
      return state;
  }
}
