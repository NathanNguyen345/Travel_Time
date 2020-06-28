import React, { useState, useContext, useEffect } from "react";
import adminContext from "../context/adminContext";

function PictureDeleteDisplay() {
  const { adminState } = useContext(adminContext);
  const [imgURL, setImgURL] = useState();

  useEffect(() => {
    var blobData = new Blob([
      adminState.selectedPicture.img.data,
      { type: adminState.selectedPicture.contentType },
    ]);

    // var objectURL = URL.createObjectURL(blobData);

    setImgURL(blobData);
  }, []);

  return (
    <div>
      {console.log(imgURL)}
      <img src={imgURL}></img>
    </div>
  );
}

export default PictureDeleteDisplay;
