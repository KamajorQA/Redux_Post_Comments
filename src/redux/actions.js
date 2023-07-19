import {
  INCREMENT,
  DECREMENT,
  WRITE_TITLE,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  LOAD_COMMENTS,
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

function loadComments() {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=10'
    );
    console.log('response >>> ', response);
    const jsonData = await response.json();
    console.log(
      'json file in data variable from response.json() >> ',
      jsonData
    );
    dispatch({
      type: LOAD_COMMENTS,
      data: jsonData,
    });
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
};
