import { CREATE_COMMENT, UPDATE_COMMENT } from './types.js';

const initialState = {
  comments: [],
};

function commentsReducer(state = initialState, action) {
  console.log('comments reducer', action, 'state >', state);

  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case UPDATE_COMMENT:
      const { comments } = state;
      const { data } = action;
      const commentIndex = comments?.findIndex((elem) => elem?.id === data?.id);
      const updatedComments = [
        ...comments.slice(0, commentIndex),
        data,
        ...comments.slice(commentIndex + 1),
      ];

      return {
        ...state,
        comments: updatedComments,
      };

    default:
      return state;
  }
}

console.log('>>>&&commentsReducer', commentsReducer, typeof commentsReducer);

export { commentsReducer };
