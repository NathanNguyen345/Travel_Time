import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import classes from "../Admin.module.css";
import adminContext from "../../context/adminContext";
import { ADD_PICTURE_DATA } from "../../context/types";

function PictureUploadInput(props) {
  const { adminDispatch } = useContext(adminContext);
  const { uploadId } = props;
  const uploadRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const [noFile, setNoFile] = useState("");

  // Add a picture to a selected location
  const addPicture = () => {
    if (uploadRef.current.files[0]) {
      let formData = new FormData();
      formData.append("uploadFile", uploadRef.current.files[0]);
      formData.append("name", nameRef.current.value);
      formData.append("description", descriptionRef.current.value);

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      // Add picture into DB
      axios
        .post(`/picture/addPicture/${uploadId}`, formData, config)
        .then((res) => {
          // After adding picture to db and dispatch new payload to context
          adminDispatch({
            type: ADD_PICTURE_DATA,
            value: res.data.payload,
          });
        })
        .catch((err) => {
          console.log(err.response.data.msg);
        });
    } else {
      setNoFile("No File To Upload");
    }
  };

  return (
    <div className={`${classes.ap_pictue_upload_flex}`}>
      <div className={`${classes.ap_picture_upload_outter}`}>
        <input type="file" ref={uploadRef}></input>
        <input type="text" placeholder="Name" ref={nameRef}></input>
        <input
          type="text"
          placeholder="Description"
          ref={descriptionRef}
        ></input>
        <button type="button" onClick={addPicture}>
          Add Picture
        </button>
        <h2>{noFile}</h2>
      </div>
    </div>
  );
}

export default PictureUploadInput;
