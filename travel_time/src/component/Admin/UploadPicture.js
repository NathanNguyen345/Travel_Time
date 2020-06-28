import React, { useRef, useState } from "react";
import axios from "axios";

function UploadPicture() {
  const uploadRef = useRef(null);
  const nameRef = useRef(null);
  const [noFile, setNoFile] = useState("");

  const addPicture = () => {
    if (uploadRef.current.files[0]) {
      let formData = new FormData();
      formData.append("uploadFile", uploadRef.current.files[0]);
      formData.append("name", "test img");
      formData.append("description", "test description");

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post("/picture/addPicture", formData, config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setNoFile("No File To Upload");
    }
  };
  return (
    <div>
      <input type="file" ref={uploadRef}></input>
      <input type="text" placeholder="Name" ref={nameRef}></input>
      <input type="text" placeholder="Description"></input>
      <button type="button" onClick={addPicture}>
        Add Picture
      </button>
      <h2>{noFile}</h2>
    </div>
  );
}

export default UploadPicture;
