import React from "react";
import classes from "./Landing.module.css";
import Social from "./Social";
import Title from "./Title";
import About from "../About/About";
import Location from "../Location/Location";
import Nav from "../Nav/Nav";

function Landing() {
  return (
    <React.Fragment>
      <div className={`${classes.landing_container}`}>
        <Nav />
        <div className={classes.overlay}></div>
        <div className={`${classes.landing_grid}`}>
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
