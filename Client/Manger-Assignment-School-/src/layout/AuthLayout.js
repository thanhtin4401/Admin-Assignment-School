import React from "react";
import { Outlet } from "react-router-dom";
import "../../src/style/main.scss";
const AuthLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AuthLayout;
