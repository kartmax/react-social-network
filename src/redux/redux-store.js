import { combineReducers, createStore } from "redux";

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
   AUTH_REDUSER
});

let store = createStore(redusers);

export default store;