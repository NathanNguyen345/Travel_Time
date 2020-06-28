import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import classes from "./Admin.module.css";
import AdminContext from "../context/adminContext";
import { LOCATION_DATA } from "../context/types";

function Selector(props) {
  const { adminState, adminDispatch } = useContext(AdminContext);
  const { apiURL, dispatchType, dataType } = props;
  const [locationData, setLocationData] = useState([]);

  // Onload pull Location API data
  useEffect(() => {
    axios
      .get(`${apiURL}`)
      .then((res) => {
        setLocationData(res.data);
        adminDispatch({ type: dataType, value: res.data });
      })
      .catch((err) => console.log(err.response.data.msg));
  }, [apiURL]);

  // Map to render Location options
  const renderLocation = adminState.locationData.map((location) => {
    return (
      <option value={location._id} key={location._id}>
        {location.name}
      </option>
    );
  });

  // Map to render Picture options
  const renderPicture = adminState.pictureData.map((picture) => {
    return (
      <option value={picture._id} key={picture._id}>
        {picture.name}
      </option>
    );
  });

  return (
    <div>
      <select
        size={locationData.length}
        className={`${classes.upload_location_selector}`}
        onChange={(e) => {
          adminDispatch({ type: dispatchType, value: e.target.value });
        }}
      >
        {dataType === LOCATION_DATA ? renderLocation : renderPicture}
      </select>
    </div>
  );
}

export default Selector;
