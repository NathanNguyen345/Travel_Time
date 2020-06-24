import React, { useContext } from "react";
import axios from "axios";
import classes from "./Login.module.css";
import { LOG_IN } from "../context/types";
import UserInput from "./UserInput";
import UserInputContext from "../context/userInputContext";
import UserLoginContext from "../context/userLoginContext";

function UserLogin() {
  const { loginState, loginDispatch } = useContext(UserLoginContext);
  const { inputState, inputDispatch } = useContext(UserInputContext);

  const userLogin = () => {
    axios
      .post("/user/login", {
        userName: inputState.userName,
        password: inputState.password,
      })
      .then((res) => {
        alert("Log In Successful");
        loginDispatch({ type: LOG_IN, value: res.data });
        loginDispatch.userName = res.data.userName;
      })
      .catch((err) => alert(err.response.data.msg));
  };

  return (
    <React.Fragment>
      <form>
        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"User Name"} dispatch={inputDispatch} />
        </div>

        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"Password"} dispatch={inputDispatch} />
        </div>

        <button type="button" onClick={userLogin}>
          Log In
        </button>
      </form>
    </React.Fragment>
  );
}

export default UserLogin;
