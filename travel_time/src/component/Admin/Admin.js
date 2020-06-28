import React, { useContext, useReducer } from "react";
import classes from "./Admin.module.css";
import AdminContext from "../context/adminContext";
import adminReducer from "../context/adminReducer";
import PictureUpload from "./PictureUpload";
import PictureDelete from "./PictureDelete";

function Admin() {
  const adminInitialState = useContext(AdminContext);
  const [adminState, adminDispatch] = useReducer(
    adminReducer,
    adminInitialState
  );

  return (
    <AdminContext.Provider value={{ adminState, adminDispatch }}>
      <div>
        <PictureUpload />
        <PictureDelete />
      </div>
    </AdminContext.Provider>
  );
}

export default Admin;
