import React from "react";
import classes from "./Location.module.css";

function LocationSelectImg(props) {
  const { city } = props;

  return (
    <div className={`${classes.location_select_background}`}>
      <img
        src={require(`../../../public/image/Location/${city}.jpg`)}
        alt={city}
        className={`location_select_img`}
      ></img>
    </div>
  );
}

export default LocationSelectImg;
