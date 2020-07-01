import React from "react";
import classes from "../Admin.module.css";

function DeleteButton() {
  return (
    <React.Fragment>
      <button className={`${classes.ap_trash_button}`}>
        <img
          className={`${classes.ap_trash_icon}`}
          src={require("../../../images/Admin/trash.svg")}
        ></img>
      </button>
    </React.Fragment>
  );
}

export default DeleteButton;
