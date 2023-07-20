import { WRITE_TITLE } from './types';

const initialState = {
  text: '',
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_TITLE:
      return {
        ...state,
        text: action.data,
      };

    default:
      return state;
  }
};

export { titleReducer };
