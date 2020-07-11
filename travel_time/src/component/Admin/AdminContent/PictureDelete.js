import React, { useContext, useEffect } from "react";
import classes from "../Admin.module.css";
import axios from "axios";
import PictureSelector from "./PictureSelector";
import adminContext from "../../context/adminContext";
import { DELETE_PICTURE_ID, PICTURE_DATA } from "../../context/types";

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

  return (
    <div className={`${classes.ap_picture_delete_flex}`}>
      <div className={`${classes.ap_picture_delete_outter}`}>
        {adminState.uploadLocationId ? (
          <PictureSelector dispatchType={DELETE_PICTURE_ID} />
        ) : null}
      </div>
    </div>
  );
}

export default PictureDelete;
