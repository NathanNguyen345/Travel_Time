import React, { useContext } from "react";
import AdminContext from "../../context/adminContext";

import PictureItem from "./PictureItem";

function PictureSelector() {
  const { adminState } = useContext(AdminContext);

  const renderPicture = adminState.pictureData.map((picture) => {
    return <PictureItem {...picture} key={picture._id} />;
  });

  return <React.Fragment>{renderPicture}</React.Fragment>;
}

export default PictureSelector;
