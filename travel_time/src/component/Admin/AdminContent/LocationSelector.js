import React from "react";
import classes from "../Admin.module.css";
import Selector from "./Selector";

import { UPLOAD_ID, LOCATION_DATA } from "../../context/types";

function LocationSelector() {
  return (
    <div className={`${classes.ap_location_selector_flex}`}>
      <div className={`${classes.ap_location_select_outter}`}>
        <Selector
          apiURL={"/location/getLocation"}
          dispatchType={UPLOAD_ID}
          dataType={LOCATION_DATA}
          dropDownSize={1}
        />
        <button className={`${classes.ap_trash_button}`}>
          <img
            className={`${classes.ap_trash_icon}`}
            src={require("../../../images/Admin/trash.svg")}
          ></img>
        </button>
      </div>
    </div>
  );
}

export default LocationSelector;
