import React, { useContext } from "react";
import classes from "../Admin.module.css";
import axios from "axios";
import { SELECTED_PICTURE, DELETE_PICTURE_ID } from "../../context/types";
import AdminContext from "../../context/adminContext";

function DeleteButton(props) {
  const { id } = props;
  const { adminDispatch } = useContext(AdminContext);

  // Dispatch to adminDispatch when new selection is selected
  const handleSelectionChange = (e) => {
    adminDispatch({ type: DELETE_PICTURE_ID, value: e.target.value });

    // If selecting a picture, adminDispatch to get picture information to be displayed
    axios
      .get(`/picture/getPicture/${e.target.value}`)
      .then((res) =>
        adminDispatch({
          type: SELECTED_PICTURE,
          value: res.data.pictureFound,
        })
      )
      .catch((err) => console.log(err.response.data.msg));
  };

  return (
    <React.Fragment>
      {console.log(id)}
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
