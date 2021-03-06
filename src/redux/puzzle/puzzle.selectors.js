import { createSelector } from 'reselect';

const selectGame = state => state.PuzzleGame;

export const selectPuzzle = createSelector(
  [selectGame],
  state => state.puzzle
);

export const selectPuzzleArray = createSelector(
  [selectGame],
  state => state[state.puzzle]
);

export const selectPreview = createSelector(
  [selectGame],
  state => state.preview
);

export const selectTempArr = createSelector(
  [selectGame],
  state => state.tempArr
);

export const selectPreviewState = createSelector(
  [selectGame],
  state => state.isPreview
);

export const selectSwitcherState = createSelector(
  [selectGame],
  state => state.isOpen
);

export const selectIsDone = createSelector(
  [selectGame],
  state => state.isDone
);