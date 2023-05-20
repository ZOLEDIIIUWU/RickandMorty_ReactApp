import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)) 
);

export default store;