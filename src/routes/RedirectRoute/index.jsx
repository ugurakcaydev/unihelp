/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const RedirectRoute = ({ children }) => {
  const currentAccount = localStorage.getItem("currentAccount");

  if (currentAccount) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RedirectRoute;
