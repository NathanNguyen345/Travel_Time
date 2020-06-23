import React from "react";
import classes from "./Login.module.css";
import CreateUser from "./CreateUser";

function Login() {
  return (
    <div className={`${classes.login_container}`}>
      <div className={`${classes.login_grid}`}>
        <div className={`${classes.login_img}`}></div>
        <CreateUser />
      </div>
    </div>
  );
}

export default Login;
