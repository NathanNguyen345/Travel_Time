import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Admin.module.css";

function UploadLocationSelector() {
  const [locationData, setLocationData] = useState([]);

  // Onload pull Location API data
  useEffect(() => {
    axios
      .get("/location/getLocation")
      .then((res) => {
        setLocationData(res.data);
      })
      .catch((err) => console.log(err.response.data.msg));
  }, []);

  return (
    <div>
      <select
        size={locationData.length}
        className={`${classes.upload_location_selector}`}
      >
        {locationData.map((location) => {
          return (
            <option value={location._id} key={location._id}>
              {location.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default UploadLocationSelector;
