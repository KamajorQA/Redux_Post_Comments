import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from './types.js';

const initialState = {
  loading: false,
};

const loaderReducer = (state = initialState, action) => {
  console.log(
    'loaderReducer state > ',
    state,
    'loaderReducer action > ',
    action
  );

  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export { loaderReducer };
