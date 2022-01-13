import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes";

const localAuth = localStorage.getItem("authLogin");

const init = {
  isAuth: localAuth || false,
  token: "",
};
export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("authLogin", true);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
