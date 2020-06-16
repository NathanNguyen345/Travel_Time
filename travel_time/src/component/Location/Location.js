import React from "react";
import classes from "./Location.module.css";
import LocationItem from "./LocationItem";

function Location() {
  return (
    <div className={`${classes.location_container}`}>
      <div className={`${classes.location_grid}`}>
        <div className={`${classes.grid_middle}`}>
          <div className={`${classes.flex} test`}>
            <LocationItem city={"Toronto"} />
            <LocationItem city={"Seattle"} />
            <LocationItem city={"Portland"} />
            <LocationItem city={"Los Angeles"} />
            <LocationItem city={"San Jose"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
