import React, { useContext } from "react";
import classes from "../Admin.module.css";
import PictureUploadInput from "./PictureUploadInput";
import PictureDelete from "./PictureDelete";
import adminContext from "../../context/adminContext";
import LocationSelector from "./LocationSelector";

function AdminContent() {
  const { adminState } = useContext(adminContext);

  return (
    <div className={`${classes.ap_content_wrapper}`}>
      <LocationSelector />
      <PictureUploadInput uploadId={adminState.uploadLocationId} />
      <PictureDelete />
    </div>
  );
}

export default AdminContent;
