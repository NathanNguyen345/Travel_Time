import React from "react";
import classes from "./Landing.module.css";

function Social() {
  return (
    <div className={`${classes.social}`}>
      <img
        src={require("../../images/Landing/user.svg")}
        alt="Person_Webpage"
      ></img>
      <img
        src={require("../../images/Landing/linkedin.svg")}
        alt="LinkedIn"
      ></img>
      <img
        src={require("../../images/Landing/insta.svg")}
        alt="Instagram"
      ></img>
    </div>
  );
}

export default Social;
