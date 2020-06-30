import React, { useState, useContext, useEffect } from "react";
import adminContext from "../context/adminContext";

function PictureDeleteDisplay() {
  const { adminState } = useContext(adminContext);
  const [base64Img, setBase64Img] = useState();

  // Convert Array Buffer to Base64 to be rendered to screen
  useEffect(() => {
    var binary = "";
    var bytes = new Uint8Array(adminState.selectedPicture.img.data);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    setBase64Img(btoa(binary));
  }, [adminState.selectedPicture.img.data]);

  return (
    <div>
      {base64Img ? (
        <img
          src={`data:${adminState.selectedPicture.contentTyp};base64, ${base64Img}`}
          alt="selectedPicture"
        />
      ) : null}
    </div>
  );
}

export default PictureDeleteDisplay;
