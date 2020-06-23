import React, { useContext } from "react";
import classes from "./Login.module.css";
import UserInputContext from "../context/userInputContext";

function UserInput(props) {
  const { dispatch } = useContext(UserInputContext);
  const { labelName } = props;

  return (
    <React.Fragment>
      <label>{labelName}</label>
      <input
        type={
          labelName === "Password" || labelName === "Confirm Password"
            ? "password"
            : "text"
        }
        onChange={(e) => {
          dispatch({
            type: labelName,
            value: e.target.value.toLowerCase(),
          });
        }}
      ></input>
    </React.Fragment>
  );
}

export default UserInput;
