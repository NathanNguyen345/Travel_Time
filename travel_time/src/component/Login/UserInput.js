import React from "react";
import classes from "./Login.module.css";

function UserInput(props) {
  const { labelName, dispatch } = props;

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
