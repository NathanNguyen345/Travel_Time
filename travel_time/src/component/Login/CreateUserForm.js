import React, { useContext } from "react";
import axios from "axios";
import classes from "./Login.module.css";
import UserInput from "./UserInput";
import UserInputConext from "../context/userInputContext";

function CreateUserForm() {
  const { inputState, inputDispatch } = useContext(UserInputConext);

  // Call API to create user
  const createAccount = () => {
    axios
      .post("/user/add", {
        firstName: inputState.firstName,
        lastName: inputState.lastName,
        userName: inputState.userName,
        email: inputState.email,
        password: inputState.password,
      })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  // Non-matching password flag
  const passwordFlag = () => {
    if (inputState.password !== inputState.confirmPassword) {
      return <h3>Password Doesn't Match</h3>;
    }
  };

  return (
    <React.Fragment>
      <form>
        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"First Name"} dispatch={inputDispatch} />
          <UserInput labelName={"Last Name"} dispatch={inputDispatch} />
        </div>

        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"User Name"} dispatch={inputDispatch} />
        </div>

        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"Email"} dispatch={inputDispatch} />
        </div>

        <div className={`${classes.login_flex_item}`}>
          <UserInput labelName={"Password"} dispatch={inputDispatch} />
          <UserInput labelName={"Confirm Password"} dispatch={inputDispatch} />
          {passwordFlag()}
        </div>

        <button
          type="button"
          onClick={createAccount}
          disabled={
            inputState.password === inputState.confirmPassword ? false : true
          }
        >
          Create Account
        </button>
      </form>
    </React.Fragment>
  );
}

export default CreateUserForm;
