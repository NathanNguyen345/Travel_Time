import React from "react";
import classes from "./Location.module.css";
import LocationItem from "./LocationItem";

function Location() {
  return (
    <div className={`${classes.location_container}`}>
      <div className={`${classes.location_grid}`}>
        <div className={`${classes.grid_middle}`}>
          <div className={`${classes.flex}`}>
            <LocationItem city={"Toronto"} id={1} />
            <LocationItem city={"Seattle"} id={1} />
            <LocationItem city={"Portland"} id={1} />
            <LocationItem city={"Los Angeles"} id={1} />
            <LocationItem city={"San Jose"} id={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
