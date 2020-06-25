import React, { useContext } from "react";
import classes from "./Login.module.css";
import CreateUserForm from "./CreateUserForm";
import UserLogin from "./UserLogin";

function CreateUser() {
  return (
    <div className={`${classes.create_user_container}`}>
      <div className={`${classes.create_user_flex}`}>
        <CreateUserForm />
        {/* <UserLogin /> */}
      </div>
    </div>
  );
}

export default CreateUser;
