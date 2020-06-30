import React, { useEffect, useContext } from "react";
import axios from "axios";
import classes from "../Admin.module.css";
import AdminContext from "../../context/adminContext";

function Selector(props) {
  const { adminState, adminDispatch } = useContext(AdminContext);
  const { apiURL, dispatchType, dataType, dropDownSize } = props;

  // Fetch Location API data
  useEffect(() => {
    axios
      .get(`${apiURL}`)
      .then((res) => {
        adminDispatch({ type: dataType, value: res.data });
      })
      .catch((err) => console.log(err.response.data.msg));
  }, [adminDispatch, apiURL, dataType]);

  // Map to render Location options
  const renderLocation = adminState.locationData.map((location) => {
    return (
      <option value={location._id} key={location._id}>
        {location.name}
      </option>
    );
  });

  // Dispatch to adminDispatch when new selection is selected
  const handleSelectionChange = (e) => {
    adminDispatch({ type: dispatchType, value: e.target.value });
  };

  return (
    <div className={`${classes.ap_selector}`}>
      <select
        size={dropDownSize}
        onChange={handleSelectionChange}
        defaultValue="none"
      >
        <option value="none" disabled hidden>
          Select A Location
        </option>
        {renderLocation}
      </select>
    </div>
  );
}

export default Selector;
