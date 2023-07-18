import {
  INCREMENT,
  DECREMENT,
  WRITE_TITLE,
  CREATE_COMMENT,
  UPDATE_COMMENT,
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

export {
  incrementLikes,
  decrementLikes,
  writeTitle,
  createComment,
  updateComment,
};
