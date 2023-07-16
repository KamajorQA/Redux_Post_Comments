import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { titleReducer } from './titleReducer.js';
import { commentsReducer } from './commentsReducer.js';

const rootReducer = combineReducers({
  likesReducer,
  titleReducer,
  commentsReducer,
});

export { rootReducer };
