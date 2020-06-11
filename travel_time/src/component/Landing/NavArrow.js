import React from "react";
import classes from "./Landing.module.css";

function NavArrow() {
  return (
    <div className={`${classes.nav}`}>
      <span className={`${classes.nav_arrow}`}>&#x25C0;</span>
    </div>
  );
}

export default NavArrow;
