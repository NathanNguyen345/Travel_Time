import React, { useContext, useReducer } from "react";
import classes from "./Admin.module.css";
import AdminContext from "../context/adminContext";
import adminReducer from "../context/adminReducer";
import PictureUpload from "./PictureUpload";
import PictureDelete from "./PictureDelete";
import AdminNav from "./AdminNav";

function Admin() {
  const adminInitialState = useContext(AdminContext);
  const [adminState, adminDispatch] = useReducer(
    adminReducer,
    adminInitialState
  );

  return (
    <AdminContext.Provider value={{ adminState, adminDispatch }}>
      <div className={`${classes.admin_panel}`}>
        <div className={`${classes.ap_wrapper}`}>
          <div className={`${classes.ap_nav_container}`}>
            <AdminNav />
          </div>
          <div className={`${classes.ap_context_container}`}></div>
          {/* <PictureUpload /> */}
          {/* <PictureDelete /> */}
        </div>
      </div>
    </AdminContext.Provider>
  );
}

export default Admin;
