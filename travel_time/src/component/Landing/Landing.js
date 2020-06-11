import React from "react";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <div className={`${classes.landing_container}`}>
      <div className={classes.overlay}></div>
      <div className={`${classes.landing_grid}`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div className={`${classes.title}`}>
          <h1>Travel Time</h1>
        </div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
}

export default Landing;
