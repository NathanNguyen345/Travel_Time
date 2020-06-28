import React, { useState, useContext, useReducer } from "react";
import classes from "./Admin.module.css";
import UploadPicture from "./UploadPicture";
import Selector from "./Selector";
import DeletePicture from "./DeletePicture";
import axios from "axios";
import AdminContext from "../context/adminContext";
import adminReducer from "../context/adminReducer";
import {
  UPLOAD_ID,
  DELETE_LOCATION_ID,
  DELETE_PICTURE_ID,
  LOCATION_DATA,
  PICTURE_DATA,
} from "../context/types";

function Admin() {
  const adminInitialState = useContext(AdminContext);
  const [adminState, adminDispatch] = useReducer(
    adminReducer,
    adminInitialState
  );

  const renderPictureSelect = () => {
    if (adminState.deleteLocationId !== "") {
      return (
        <Selector
          apiURL={`/picture/getPicture/${adminState.deleteLocationId}`}
          dispatchType={DELETE_PICTURE_ID}
          dataType={PICTURE_DATA}
        />
      );
    }
  };

  const handleClick = () => {
    axios
      .delete(
        `/picture/deletePicture/${adminState.deleteLocationId}/${adminState.deletePictureId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  };

  return (
    <AdminContext.Provider value={{ adminState, adminDispatch }}>
      <div>
        {/* Upload Component */}
        <Selector
          apiURL={"/location/getLocation"}
          dispatchType={UPLOAD_ID}
          dataType={LOCATION_DATA}
        />
        <UploadPicture uploadId={adminState.uploadLocationId} />

        {/* Delete Component */}
        <Selector
          apiURL={"/location/getLocation"}
          dispatchType={DELETE_LOCATION_ID}
          dataType={LOCATION_DATA}
        />
        {renderPictureSelect()}
        <button type="button" onClick={handleClick}>
          Delete Picture
        </button>
      </div>
    </AdminContext.Provider>
  );
}

export default Admin;
