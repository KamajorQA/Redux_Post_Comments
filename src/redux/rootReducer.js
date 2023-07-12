import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';

const rootReducer = combineReducers({
  likes: likesReducer,
});

export { rootReducer };
