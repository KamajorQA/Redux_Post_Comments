import {
  INCREMENT,
  DECREMENT,
  WRITE_TITLE,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  LOAD_COMMENTS,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from './types';

function incrementLikes() {
  return {
    type: INCREMENT,
  };
}

function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

function writeTitle(text) {
  return {
    type: WRITE_TITLE,
    data: text,
  };
}

function createComment(commentText, id) {
  return {
    type: CREATE_COMMENT,
    data: { commentText, id },
  };
}

function updateComment(commentText, id) {
  return {
    type: UPDATE_COMMENT,
    data: { commentText, id },
  };
}

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id,
  };
}

function spinnerOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

function spinnerOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      errorText: text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 3000);
  };
}

function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}

function loadComments() {
  return async (dispatch) => {
    dispatch(spinnerOn());
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?_limit=10'
      );
      const jsonData = await response.json();
      dispatch({
        type: LOAD_COMMENTS,
        data: jsonData,
      });
    } catch (error) {
      dispatch(errorOn(error.message));
      console.error('Error in fetch API caught >> ', error);
    } finally {
      dispatch(spinnerOff());
      setTimeout(() => {
        dispatch(errorOff());
      }, 3000);
    }
  };
}

export {
  incrementLikes,
  decrementLikes,
  writeTitle,
  createComment,
  updateComment,
  deleteComment,
  loadComments,
  errorOn,
};
