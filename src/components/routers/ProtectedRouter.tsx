import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import LoadingSpinner from "../LoadingSpinner";

const ProtectedRouter = ({ redirectTo }: any) => {
  const [currentUser] = useContext(UserContext);

  if (currentUser === undefined) {
    return <LoadingSpinner />;
  }

  return currentUser ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRouter;
