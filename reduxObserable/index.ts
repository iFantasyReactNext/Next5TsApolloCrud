import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { UserReducer, loginEpic, logoutEpic } from "./UserEpic";
import { reducer as formReducer } from 'redux-form'


export const rootEpic = combineEpics(
  loginEpic, logoutEpic
);

export const rootReducer = combineReducers({
  UserReducer,
  form: formReducer
});
