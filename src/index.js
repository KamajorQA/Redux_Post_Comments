import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { profanityFilter } from './redux/middleware';
import App from './components/App/App';
import './index.css';

const store = createStore(
  rootReducer,
  // compose(
  applyMiddleware(thunk, profanityFilter)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

console.log(thunk);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
