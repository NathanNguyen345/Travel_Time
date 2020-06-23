import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";

function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createAccount = () => {
    axios
      .post("/user/add", {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      })
      .then((resp) => {
        // alert(resp.data.msg);
        console.log(resp);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className={`${classes.create_user_container}`}>
      <div className={`${classes.create_user_flex}`}>
        <div className={`${classes.login_flex_item}`}>
          <form>
            <div className={`${classes.login_flex_item}`}>
              <label>First Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value.toLowerCase());
                }}
              ></input>
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value.toLowerCase());
                }}
              ></input>
            </div>

            <div className={`${classes.login_flex_item}`}>
              <label>User Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value.toLowerCase());
                }}
              ></input>
            </div>

            <div className={`${classes.login_flex_item}`}>
              <label>Email:</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value.toLowerCase());
                }}
              ></input>
            </div>

            <div className={`${classes.login_flex_item}`}>
              <label>Password:</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value.toLowerCase());
                }}
              ></input>
              <label>Confirm Password:</label>
              <input
                type="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value.toLowerCase());
                }}
              ></input>
            </div>

            <button type="button" onClick={createAccount}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
