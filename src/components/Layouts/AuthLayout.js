import React from "react";
import "../../styles/auth.css";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="authContainer">
      <div className="box">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
