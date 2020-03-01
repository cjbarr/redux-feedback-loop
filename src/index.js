import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//could probably have done all of these in one router using an object with keys,
//but I wanted to practice working across multiple states :)

const feelingReducer =(state='', action) =>{
    if (action.type === 'ADD_FEELING'){
        return state = action.payload;
    }
    if (action.type === 'NEW_FEEDBACK') {
        state = '';
        return state
    }
    return state
}//router for feeling page capture


const understandingReducer = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return state = action.payload;
    }
    if(action.type === 'NEW_FEEDBACK'){
        state='';
        return state
    }
    return state
}//understanding page input

const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return state = action.payload;
    }
    if (action.type === 'NEW_FEEDBACK') {
        state = [];
        return state
    }
    return state
}//support page input

const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        return state = action.payload;
    }
    if (action.type === 'NEW_FEEDBACK') {
        state = '';
        return state
    }
    return state
}//comment page input, can be blank.

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
);

ReactDOM.render(<Provider store = { storeInstance } > <App /></Provider >, document.getElementById('root'));
registerServiceWorker();
