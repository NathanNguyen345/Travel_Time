import React from "react";
import classes from "../Admin.module.css";
import Selector from "./Selector";

import { UPLOAD_ID, LOCATION_DATA } from "../../context/types";
import DeleteButton from "./DeleteButton";

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
        <DeleteButton />
      </div>
    </div>
  );
}

export default LocationSelector;
