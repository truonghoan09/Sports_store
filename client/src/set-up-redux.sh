#!/bin/bash

#Install necessary packages
npm i redux react-redux redux-thunk

#Create redux folder and subfolders/files
mkdir redux
cd redux
mkdir reducers
touch actions.js store.js type.js
cd reducers
touch callTestReducer.js
cd ..

#Set up type.js
echo "export const FETCH_SERVER_REQUEST = 'FETCH_SERVER_REQUEST';
export const FETCH_SERVER_SUCCESS = 'FETCH_SERVER_SUCCESS';
export const FETCH_SERVER_ERROR = 'FETCH_SERVER_ERROR';" > ./type.js

#Set up actions.js
echo "import axios from 'axios';
import { FETCH_SERVER_REQUEST, FETCH_SERVER_SUCCESS, FETCH_SERVER_ERROR } from './types';

export const callTest = (name) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_SERVER_REQUEST });
        try {
            const responseCallTest = await axios.post('http://localhost:8070/api/callTest', { name });
            dispatch({ type: FETCH_SERVER_SUCCESS, payload: responseCallTest.data });
        } catch (error) {
            dispatch({ type: FETCH_SERVER_ERROR, error: error.message });
        }
    };
};" > ./actions.js

#Set up callTestReducer.js
echo "import { FETCH_SERVER_REQUEST, FETCH_SERVER_SUCCESS, FETCH_SERVER_ERROR } from '../types';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const callTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVER_REQUEST:
        return {
            ...state,
            loading: true,
        };
        case FETCH_SERVER_SUCCESS:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case FETCH_SERVER_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error,
        };
        default:
        return state;
    }
};

export default callTestReducer;" > ./reducers/callTestReducer.js

#Set up store.js
echo "import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import callTestReducer from './reducers/callTestReducer';

const rootReducer = combineReducers({
    callTestReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;" > ./store.js