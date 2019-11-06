import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as form} from "redux-form";
import {dialogs} from "./dialogs";
import {profile} from "./profile";
import {users} from "./users";
import {auth} from "./auth";





const reducers = combineReducers({ form, auth, dialogs, profile, users });
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store.getState;





















