import React from "react";
import classes from "./Landing.module.css";
import Social from "./Social";
import Title from "./Title";
import NavArrow from "./NavArrow";

function Landing() {
  return (
    <div className={`${classes.landing_container}`}>
      <div className={classes.overlay}></div>
      <div className={`${classes.landing_grid}`}>
        <NavArrow />
        <Title />
        <Social />
      </div>
    </div>
  );
}

export default Landing;
