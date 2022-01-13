import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
export const loginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
