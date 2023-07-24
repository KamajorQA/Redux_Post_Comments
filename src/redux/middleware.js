import { CREATE_COMMENT } from './types.js';
import { errorOn } from './actions.js';

const filthyWords = ['эчпочмак', 'смерт', 'баран'];

function profanityFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_COMMENT) {
        const hasFilthyWords = filthyWords.some((word) =>
          action?.data?.commentText.includes(word)
        );
        if (!!hasFilthyWords) {
          return store.dispatch(errorOn('Не ругайтесь!'));
        }
      }
      return next(action);
    };
  };
}

export { profanityFilter };
