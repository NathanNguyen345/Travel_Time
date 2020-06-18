import React from "react";
import classes from "./About.module.css";
import AboutText from "./AboutText";
import AboutImg from "./AboutImg";

function About() {
  return (
    <div className={`${classes.about_container} about`}>
      <div className={`${classes.grid}`}>
        <AboutText />
        <AboutImg />
      </div>
    </div>
  );
}

export default About;
