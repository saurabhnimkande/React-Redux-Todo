import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useSelector((state) => ({
    token: state.authReducer.token,
    isAuth: state.authReducer.isAuth,
  }));
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
