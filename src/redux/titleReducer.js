import { WRITE_TITLE } from './types';

const initialState = {
  text: '',
};

const titleReducer = (state = initialState, action) => {
  console.log('titleReducer action object >', action);
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
