import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux';
import { incrementReducer } from './reducers/incrementReducers';
import { CounterContainer } from './components/Counter';
import { loginReducer } from './reducers/loggedIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  combineReducers({
    countSlice: incrementReducer,
    loggedSlice: loginReducer
  }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
root.render(
  <Provider store={store}>
    <CounterContainer/>
  </Provider>
);
