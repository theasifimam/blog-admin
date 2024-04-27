import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./utils";

// handle the private routes
const PrivateRoutes = () => {
  return getToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

// handle the public routes
export const PublicRoutes = () => {
  return !getToken() ? <Outlet /> : <Navigate to="/" />;
};
