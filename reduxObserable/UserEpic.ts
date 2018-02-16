import { ofType } from "redux-observable"
import { filter, delay, mapTo } from "rxjs/operators"
import "rxjs";

const LOGIN = "LOGIN";
const LOGINSUCCESS = "LOGINSUCCESS";
const LOGOUT = "LOGOUT";
export const login = () => ({ type: LOGIN });

const UserReducerInit = { loginState: false };

export const loginEpic = action$ => {
  return action$
    .ofType(LOGIN)
    .delay(1000)
    .mapTo({ type: "LOGINSUCCESS" })
};

export const logoutEpic = action$ => {
  return action$
    .ofType(LOGOUT)
    .delay(1000)
    .mapTo({ type: "LOGOUTSUCCESS" })
};


export const UserReducer = (state = UserReducerInit, action) => {
  switch (action.type) {
    case "LOGINSUCCESS":
      console.log("登入成功")
      return { loginState: true }
    case "LOGOUTSUCCESS":
      console.log("登出成功")
      return { loginState: false }
    default:
      return state
  }

}