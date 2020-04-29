import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { puzzleReducer } from './puzzle/puzzle.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['PuzzleGame']
}

const rootReducer = combineReducers({
  PuzzleGame: puzzleReducer,
});

export default persistReducer(persistConfig, rootReducer)

