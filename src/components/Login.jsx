import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "../Redux/auth/actions";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const formData = useRef({ email: "", password: "" });
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => ({
    token: state.authReducer.token,
    isAuth: state.authReducer.isAuth,
  }));
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <input
        placeholder="Enter Email"
        onChange={(e) => (formData.current.email = e.target.value)}
      ></input>
      <input
        placeholder="Enter Password"
        onChange={(e) => (formData.current.password = e.target.value)}
      ></input>
      <button
        onClick={() => {
          fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData.current),
          })
            .then((e) => e.json())
            .then((e) => dispatch(loginSuccess(e.token)))
            .catch((err) => dispatch(loginFailed(err)));
        }}
      >
        Submit
      </button>
      <h3>Default Login details</h3>
      <p>email: eve.holt@reqres.in</p>
      <p>password : cityslicka</p>
    </div>
  );
};
