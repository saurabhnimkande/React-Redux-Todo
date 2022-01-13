import { combineReducers, createStore } from "redux";
import { reducer as todoReducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  authReducer: authReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
