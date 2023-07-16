import { INCREMENT, DECREMENT, WRITE_TITLE, CREATE_COMMENT } from './types';

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

export { incrementLikes, decrementLikes, writeTitle, createComment };
