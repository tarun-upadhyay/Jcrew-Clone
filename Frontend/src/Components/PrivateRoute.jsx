import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AuthContext/AuthcontextProvider";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AppContext);
  console.log(state);
  if (!state.adminAuth && !state.isAuth) {
    return <Navigate to="/signin" />;
  }
  if (!state.isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
