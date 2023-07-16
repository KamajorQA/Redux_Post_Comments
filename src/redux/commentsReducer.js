import { CREATE_COMMENT } from './types.js';

const initialState = {
  comments: [],
};

function commentsReducer(state = initialState, action) {
  console.log('comments reducer', action);

  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    default:
      return state;
  }
}

export { commentsReducer };
