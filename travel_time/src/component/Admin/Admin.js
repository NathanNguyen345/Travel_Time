import React from "react";
import classes from "./Admin.module.css";
import UploadPicture from "./UploadPicture";
import UploadLocationSelector from "./UploadLocationSelector";

function Admin() {
  return (
    <div>
      <UploadLocationSelector />
      <UploadPicture />
    </div>
  );
}

export default Admin;
