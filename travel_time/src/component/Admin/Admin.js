import React, { useContext, useReducer } from "react";
import classes from "./Admin.module.css";
import AdminContext from "../context/adminContext";
import AdminContent from "./AdminContent/AdminContent";
import adminReducer from "../context/adminReducer";
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
          <div className={`${classes.ap_content_container}`}>
            <AdminContent />
          </div>
        </div>
      </div>
    </AdminContext.Provider>
  );
}

export default Admin;
