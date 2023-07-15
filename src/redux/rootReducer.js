import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { titleReducer } from './titleReducer.js';

const rootReducer = combineReducers({
  likesReducer,
  titleReducer,
});

export { rootReducer };
