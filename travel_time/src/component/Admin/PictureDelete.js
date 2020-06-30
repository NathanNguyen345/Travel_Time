import React, { useContext, useEffect } from "react";
import axios from "axios";
import Selector from "./Selector";
import PictureSelector from "./PictureSelector";
import adminContext from "../context/adminContext";
import {
  DELETE_PICTURE_ID,
  PICTURE_DATA,
  DELETE_LOCATION_ID,
  LOCATION_DATA,
  SELECTED_PICTURE,
} from "../context/types";
import PictureDeleteDisplay from "./PictureDeleteDisplay";

function PictureDelete() {
  const { adminState, adminDispatch } = useContext(adminContext);

  useEffect(() => {
    if (adminState.deleteLocationId !== null) {
      axios
        .get(`/location/getLocationPicture/${adminState.deleteLocationId}`)
        .then((res) => adminDispatch({ type: PICTURE_DATA, value: res.data }))
        .catch((err) => console.log(err.response.data.msg));
    }
  }, [adminState.deleteLocationId, adminDispatch]);

  const handleClick = () => {
    // Delete slected picture for Location subdoc and Picture collection
    axios
      .delete(
        `/picture/deletePicture/${adminState.deleteLocationId}/${adminState.deletePictureId}`
      )
      .then((res) => {
        // Fetch updated Location Picture subdoc
        axios
          .get(`/location/getLocationPicture/${adminState.deleteLocationId}`)
          .then((res) => adminDispatch({ type: PICTURE_DATA, value: res.data }))
          .catch((err) => console.log(err.response.data.msg));

        adminDispatch({ type: SELECTED_PICTURE, value: null });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <div>
      <Selector
        apiURL={"/location/getLocation"}
        dispatchType={DELETE_LOCATION_ID}
        dataType={LOCATION_DATA}
      />

      {adminState.deleteLocationId ? (
        <PictureSelector dispatchType={DELETE_PICTURE_ID} />
      ) : null}

      {adminState.selectedPicture ? <PictureDeleteDisplay /> : null}

      <button type="button" onClick={handleClick}>
        Delete Picture
      </button>
    </div>
  );
}

export default PictureDelete;
