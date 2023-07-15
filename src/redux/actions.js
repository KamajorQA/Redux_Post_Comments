import { INCREMENT, DECREMENT, WRITE_TITLE } from './types';

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

export { incrementLikes, decrementLikes, writeTitle };
