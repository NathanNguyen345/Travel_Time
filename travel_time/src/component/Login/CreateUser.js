import React, { useContext } from "react";
import classes from "./Login.module.css";
import CreateUserForm from "./CreateUserForm";
import UserLogin from "./UserLogin";

function CreateUser() {
  return (
    <div className={`${classes.create_user_container}`}>
      <div className={`${classes.create_user_flex}`}>
        <div className={`${classes.login_flex_item}`}>
          {/* <CreateUserForm /> */}
          <UserLogin />
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
