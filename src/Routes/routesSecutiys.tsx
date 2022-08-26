import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";
import { Navigate, Outlet, useLocation } from "react-router";
import React from "react";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando ...</div>;
  }

  return user ? ( <Outlet/> 
  ) : (
  <Navigate to="/login" replace state={{from: location}}/>);
}; 

export default ProtectedRoutes;
