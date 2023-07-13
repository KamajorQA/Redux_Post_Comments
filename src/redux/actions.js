import { INCREMENT, DECREMENT } from './types';

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

export { incrementLikes, decrementLikes };
