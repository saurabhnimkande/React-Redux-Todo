import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  REMOVE_TODO,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});

export const addTodoLoading = () => ({
  type: ADD_TODO_LOADING,
});

export const addTodoSuccess = (data) => ({
  type: ADD_TODO_SUCCESS,
  payload: data,
});

export const addTodoError = (err) => ({
  type: ADD_TODO_ERROR,
  payload: err,
});

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});

export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoError = (error) => ({
  type: GET_TODO_ERROR,
  payload: error,
});
