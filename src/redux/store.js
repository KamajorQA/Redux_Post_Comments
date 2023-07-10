import { createStore } from 'redux';

const initialState = {
  likes: 0,
};

const reducer = (state = initialState, action) => {
  console.log('reduce >', action);

  return state;
};

const store = createStore(reducer);

export default store;
