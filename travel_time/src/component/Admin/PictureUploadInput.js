import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import adminContext from "../context/adminContext";
import { PICTURE_DATA } from "../context/types";

function PictureUploadInput(props) {
  const { adminState, adminDispatch } = useContext(adminContext);
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
          console.log(res);
          if (adminState.uploadLocationId === adminState.deleteLocationId) {
            // After adding picture to db, we fetch new list of subdocs for the location
            axios
              .get(
                `/location/getLocationPicture/${adminState.deleteLocationId}`
              )
              .then((res) =>
                adminDispatch({ type: PICTURE_DATA, value: res.data })
              )
              .catch((err) => console.log(err.response.data.msg));
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg);
        });
    } else {
      setNoFile("No File To Upload");
    }
  };

  return (
    <div>
      <input type="file" ref={uploadRef}></input>
      <input type="text" placeholder="Name" ref={nameRef}></input>
      <input type="text" placeholder="Description" ref={descriptionRef}></input>
      <button type="button" onClick={addPicture}>
        Add Picture
      </button>
      <h2>{noFile}</h2>
    </div>
  );
}

export default PictureUploadInput;
