import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './reducers/signInReducer';
import setThemeReducer from './reducers/setThemeReducer';
import addUserReducer from './reducers/addAUserReducer';
import checkSignInReducer from './reducers/checkSignInReducer';

const rootReducer = combineReducers({
    setThemeReducer,
    addUserReducer,
    signInReducer,
    checkSignInReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
