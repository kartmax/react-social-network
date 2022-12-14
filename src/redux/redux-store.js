import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

import ADD_NEW_POST_REDUSER from './reducers/profile-reducer';
import ADD_NEW_MESSAGE_REDUSER from './reducers/messages-reducer';
import SIDEBAR_REDUSER from './reducers/sidebar-reducer';
import USERS_REDUSER from './reducers/users-reducer';
import AUTH_REDUSER from './reducers/auth-reducer';


let redusers = combineReducers({
   ADD_NEW_POST_REDUSER,
   ADD_NEW_MESSAGE_REDUSER,
   SIDEBAR_REDUSER,
   USERS_REDUSER,
   AUTH_REDUSER,

   form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

export default store;