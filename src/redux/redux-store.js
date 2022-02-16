import { combineReducers, createStore } from "redux";

import ADD_NEW_POST_REDUSER from './profile-reducer';
import ADD_NEW_MESSAGE_REDUSER from './messages-reduser';
import SIDEBAR_REDUSER from './sidebar-reduser';

let redusers = combineReducers({
   ADD_NEW_POST_REDUSER,
   ADD_NEW_MESSAGE_REDUSER,
   SIDEBAR_REDUSER
});

let store = createStore(redusers);

export default store;