import React from "react";
import classes from "./Landing.module.css";
import Social from "./Social";
import Title from "./Title";
import NavArrow from "./NavArrow";
import About from "../About/About";
import Location from "../Location/Location";

function Landing() {
  return (
    <React.Fragment>
      <div className={`${classes.landing_container}`}>
        <div className={classes.overlay}></div>
        <div className={`${classes.landing_grid}`}>
          <NavArrow />
          <Title />
          <Social />
        </div>
      </div>

      <About />
      <Location />
    </React.Fragment>
  );
}

export default Landing;
