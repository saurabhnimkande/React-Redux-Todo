import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTodo } from "../Redux/todos/actions";

export const EditTodo = () => {
  const dispatch = useDispatch();
  const value = useRef("");
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Link to="/">Go to Homepage</Link>
      <br></br>
      <br></br>
      <br></br>
      <input
        placeholder="Update the text"
        onChange={(e) => (value.current = e.target.value)}
      ></input>
      <Link to="/">
        <button
          onClick={() => {
            dispatch(editTodo({ id, value }));
          }}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};
