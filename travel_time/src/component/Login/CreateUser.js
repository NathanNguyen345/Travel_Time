import React, { useReducer, useContext } from "react";
import axios from "axios";
import classes from "./Login.module.css";
import UserInput from "./UserInput";
import UserInputContext from "../context/userInputContext";
import UserInputReducer from "../context/userInputReducer";

function CreateUser() {
  const initialState = useContext(UserInputContext);
  const [state, dispatch] = useReducer(UserInputReducer, initialState);

  // Call API to create user
  const createAccount = () => {
    axios
      .post("/user/add", {
        firstName: state.firstName,
        lastName: state.lastName,
        userName: state.userName,
        email: state.email,
        password: state.password,
      })
      .then((resp) => {
        alert(resp.data.msg);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  // Non-matching password flag
  const passwordFlag = () => {
    if (state.password !== state.confirmPassword) {
      return <h3>Password Doesn't Match</h3>;
    }
  };

  return (
    <UserInputContext.Provider value={{ state, dispatch }}>
      <div className={`${classes.create_user_container}`}>
        <div className={`${classes.create_user_flex}`}>
          <div className={`${classes.login_flex_item}`}>
            <form>
              <div className={`${classes.login_flex_item}`}>
                <UserInput labelName={"First Name"} />
                <UserInput labelName={"Last Name"} />
              </div>

              <div className={`${classes.login_flex_item}`}>
                <UserInput labelName={"User Name"} />
              </div>

              <div className={`${classes.login_flex_item}`}>
                <UserInput labelName={"Email"} />
              </div>

              <div className={`${classes.login_flex_item}`}>
                <UserInput labelName={"Password"} />
                <UserInput labelName={"Confirm Password"} />
                {passwordFlag()}
              </div>

              <button
                type="button"
                onClick={createAccount}
                disabled={
                  state.password === state.confirmPassword ? false : true
                }
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </UserInputContext.Provider>
  );
}

export default CreateUser;
