import React from "react";
import classes from "./Location.module.css";

function LocationSelectImg(props) {
  const imgSelector = (city) => {
    switch (city) {
      case "Toronto":
        return (
          <img
            src={require(`../../images/Location/Toronto.jpg`)}
            alt={city}
            className={`location_select_img`}
          ></img>
        );
      case "Seattle":
        return (
          <img
            src={require(`../../images/Location/Seattle.jpg`)}
            alt={city}
            className={`location_select_img`}
          ></img>
        );
      case "Portland":
        return (
          <img
            src={require(`../../images/Location/Portland.jpg`)}
            alt={city}
            className={`location_select_img`}
          ></img>
        );
      case "Los Angeles":
        return (
          <img
            src={require(`../../images/Location/Los Angeles.jpg`)}
            alt={city}
            className={`location_select_img`}
          ></img>
        );
      case "San Jose":
        return (
          <img
            src={require(`../../images/Location/San Jose.jpg`)}
            alt={city}
            className={`location_select_img`}
          ></img>
        );
      default:
        break;
    }
  };

  const { city } = props;
  return (
    <div className={`${classes.location_select_background}`}>
      {imgSelector(city)}
    </div>
  );
}

export default LocationSelectImg;
