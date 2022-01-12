import "./Todo.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  removeTodo,
  toggleTodo,
} from "../Redux/Actions";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Total } from "./Total";

export const Todo = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const value = useRef("");
  const getData = () => {
    dispatch(getTodoLoading());
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getTodoSuccess(res));
      })
      .catch((err) => getTodoError(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <div>
      <Total></Total>
      <input
        placeholder="Enter Todo"
        onChange={(e) => (value.current = e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          let payload = { title: value.current, status: false };
          fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              dispatch(addTodoSuccess(res));
              getData();
            })
            .catch((e) => dispatch(addTodoError(e)));
        }}
      >
        Add Todo
      </button>
      {todos.map((e, i) => {
        return (
          <div key={uuidv4()}>
            <Link to={`/todo/${e.id}`}>
              <h3 className="title">
                {i + 1}. {e.title} {e.status ? "Completed" : "Not-Completed"}
              </h3>
            </Link>
            <Link to={`/todo/${e.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => {
                dispatch(toggleTodo(e));
                // getData();
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                dispatch(removeTodo(e.id));
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
