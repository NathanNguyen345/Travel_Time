import React, { useContext } from "react";
import Selector from "./Selector";
import PictureUploadInput from "./PictureUploadInput";
import adminContext from "../context/adminContext";

import { UPLOAD_ID, LOCATION_DATA } from "../context/types";

function PictureUpload() {
  const { adminState } = useContext(adminContext);

  return (
    <div>
      <Selector
        apiURL={"/location/getLocation"}
        dispatchType={UPLOAD_ID}
        dataType={LOCATION_DATA}
      />
      <PictureUploadInput uploadId={adminState.uploadLocationId} />
    </div>
  );
}

export default PictureUpload;
