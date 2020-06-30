import React, { useContext, useEffect } from "react";
import classes from "../Admin.module.css";
import axios from "axios";
import PictureSelector from "./PictureSelector";
import adminContext from "../../context/adminContext";
import PictureDeleteDisplay from "./PictureDeleteDisplay";
import {
  DELETE_PICTURE_ID,
  PICTURE_DATA,
  SELECTED_PICTURE,
} from "../../context/types";

function PictureDelete() {
  const { adminState, adminDispatch } = useContext(adminContext);

  useEffect(() => {
    if (adminState.uploadLocationId !== null) {
      axios
        .get(`/location/getLocationPicture/${adminState.uploadLocationId}`)
        .then((res) => adminDispatch({ type: PICTURE_DATA, value: res.data }))
        .catch((err) => console.log(err.response.data.msg));
    }
  }, [adminState.uploadLocationId, adminDispatch]);

  const handleClick = () => {
    // Delete slected picture for Location subdoc and Picture collection
    axios
      .delete(
        `/picture/deletePicture/${adminState.uploadLocationId}/${adminState.deletePictureId}`
      )
      .then((res) => {
        // Fetch updated Location Picture subdoc
        axios
          .get(`/location/getLocationPicture/${adminState.uploadLocationId}`)
          .then((res) => adminDispatch({ type: PICTURE_DATA, value: res.data }))
          .catch((err) => console.log(err.response.data.msg));

        adminDispatch({ type: SELECTED_PICTURE, value: null });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <div className={`${classes.ap_picture_delete_flex}`}>
      <div className={`${classes.ap_picture_delete_outter}`}>
        {adminState.uploadLocationId ? (
          <PictureSelector dispatchType={DELETE_PICTURE_ID} />
        ) : null}
        {/* 
        {adminState.selectedPicture ? <PictureDeleteDisplay /> : null}

        <button type="button" onClick={handleClick}>
          Delete Picture
        </button> */}
      </div>
    </div>
  );
}

export default PictureDelete;
