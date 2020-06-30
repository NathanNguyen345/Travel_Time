import React from "react";
import classes from "./Admin.module.css";

function AdminNav() {
  return (
    <div className={`${classes.ap_nav_wrapper}`}>
      <div className={`${classes.ap_nav_title}`}>
        <h1>Admin</h1>
      </div>

      <div className={`${classes.ap_nav_flex}`}>
        <div className={`${classes.ap_nav_flex_item}`}>
          <button>Dashboard</button>
        </div>
        <div className={`${classes.ap_nav_flex_item}`}>
          <button>Content</button>
        </div>
        <div className={`${classes.ap_nav_flex_item}`}>
          <button>Users</button>
        </div>
        <div className={`${classes.ap_nav_flex_item}`}>
          <button>Comments</button>
        </div>
      </div>

      <div className={`${classes.ap_nav_logout}`}>
        <div className={`${classes.ap_nav_logout_flex_item}`}>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
