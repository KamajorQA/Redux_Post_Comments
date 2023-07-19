import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  LOAD_COMMENTS,
} from './types.js';

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

    case DELETE_COMMENT:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const commentIndex = comments.findIndex((elem) => elem.id === id);
        const updatedComments = [
          ...comments.slice(0, commentIndex),
          ...comments.slice(commentIndex + 1),
        ];
        return { ...state, comments: updatedComments };
      })();

    case LOAD_COMMENTS:
      const loadedComments = action.data;
      const initialComments = loadedComments.map((elem) => {
        return { commentText: elem.name, id: elem.id };
      });
      return { ...state, comments: initialComments };

    default:
      return state;
  }
}

export { commentsReducer };
