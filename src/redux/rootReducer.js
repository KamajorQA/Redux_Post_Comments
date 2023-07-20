import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { titleReducer } from './titleReducer.js';
import { commentsReducer } from './commentsReducer.js';
import { loaderReducer } from './loaderReducer.js';

const rootReducer = combineReducers({
  likesReducer,
  titleReducer,
  commentsReducer,
  loaderReducer,
});

export { rootReducer };
