import React from "react";
import classes from "./Location.module.css";

function LocationItem(props) {
  const { city, id } = props;

  const imgSelector = (id) => {
    switch (id) {
      case 1:
        return (
          <img
            src={require("../../images/Location/toronto.jpg")}
            alt="torono"
            className={classes.location_img}
          ></img>
        );
      default:
        break;
    }
  };

  return (
    <div className={`${classes.flex_item}`}>
      <h1 className={`${classes.location_title}`}>{city}</h1>
      {imgSelector(id)}
    </div>
  );
}

export default LocationItem;
