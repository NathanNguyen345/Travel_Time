import React, { useState, useEffect } from "react";
import classes from "../Admin.module.css";

function PictureDeleteDisplay(props) {
  const { img, contentType } = props;
  const [base64Img, setBase64Img] = useState();

  // Convert Array Buffer to Base64 to be rendered to screen
  useEffect(() => {
    var binary = "";
    var bytes = new Uint8Array(img);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    setBase64Img(btoa(binary));
  }, []);

  return (
    <div className={`${classes.ap_picture_item_img_container}`}>
      {base64Img ? (
        <img
          src={`data:${contentType};base64, ${base64Img}`}
          alt="selectedPicture"
          className={`${classes.ap_picture_item_img}`}
        />
      ) : null}
    </div>
  );
}

export default PictureDeleteDisplay;
