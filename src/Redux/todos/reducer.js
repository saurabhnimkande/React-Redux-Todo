import { loadData, saveData } from "../../utils/localStorage";
import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

const init = loadData("todos") || {
  loading: false,
  todos: [] || [],
  error: false,
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case TOGGLE_TODO:
      fetch(`http://localhost:3001/todos/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: !payload.status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload.id ? { ...e, status: !e.status } : e
        ),
      };
    case REMOVE_TODO:
      fetch(`http://localhost:3001/todos/${payload}`, {
        method: "DELETE",
      });
      let removeObject = {
        ...state,
        todos: state.todos.filter((e) => e.id !== payload),
      };
      saveData("todos", removeObject);
      return removeObject;
    case EDIT_TODO:
      fetch(`http://localhost:3001/todos/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: payload.value.current,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let editObject = {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload.id ? { ...e, title: payload.value.current } : e
        ),
      };
      saveData("todos", editObject);
      return editObject;
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ADD_TODO_SUCCESS:
      let addObject = {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
      saveData("todos", addObject);
      return addObject;
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
