import React, { useContext } from "react";
import classes from "../Admin.module.css";
import axios from "axios";
import { DELETE_PICTURE_ID } from "../../context/types";
import AdminContext from "../../context/adminContext";

function DeleteButton(props) {
  const { id } = props;
  const { adminState, adminDispatch } = useContext(AdminContext);

  // Dispatch to adminDispatch when new selection is selected
  const handleSelectionChange = () => {
    axios
      .delete(`/picture/deletePicture/${adminState.uploadLocationId}/${id}`)
      .then((res) => {
        adminDispatch({
          type: DELETE_PICTURE_ID,
          value: id,
        });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <React.Fragment>
      <button
        className={`${classes.ap_trash_button}`}
        onClick={handleSelectionChange}
      >
        <img
          className={`${classes.ap_trash_icon}`}
          src={require("../../../images/Admin/trash.svg")}
          alt="location_picture"
        ></img>
      </button>
    </React.Fragment>
  );
}

export default DeleteButton;
