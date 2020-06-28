import React, { useContext } from "react";
import axios from "axios";
import classes from "./Admin.module.css";
import AdminContext from "../context/adminContext";

import { SELECTED_PICTURE, DELETE_PICTURE_ID } from "../context/types";

function PictureSelector(props) {
  const { adminState, adminDispatch } = useContext(AdminContext);
  const { dispatchType } = props;

  // Map to render Picture options
  const renderPicture = adminState.pictureData.map((picture) => {
    return (
      <option value={picture._id} key={picture._id}>
        {picture.name}
      </option>
    );
  });

  // Dispatch to adminDispatch when new selection is selected
  const handleSelectionChange = (e) => {
    adminDispatch({ type: dispatchType, value: e.target.value });

    // If selecting a picture, adminDispatch to get picture information to be displayed
    if (dispatchType === DELETE_PICTURE_ID) {
      axios
        .get(`/picture/getPicture/${e.target.value}`)
        .then((res) =>
          adminDispatch({
            type: SELECTED_PICTURE,
            value: res.data.pictureFound,
          })
        )
        .catch((err) => console.log(err.response.data.msg));
    }
  };

  return (
    <div>
      <select
        size={10}
        className={`${classes.upload_location_selector}`}
        onChange={handleSelectionChange}
        defaultValue="none"
      >
        <option value="none" disabled hidden></option>
        {renderPicture}
      </select>
    </div>
  );
}

export default PictureSelector;
