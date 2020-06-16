import React, { useEffect, useRef } from "react";
import classes from "./Landing.module.css";
import { gsap } from "gsap";

function Title() {
  const titleRef = useRef(null);

  /*****
   * On load move title into div from y position.
   */
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: "100%" },
      { y: "0%", duration: 1.5, delay: 1 }
    );
  });

  return (
    <div className={`${classes.title}`}>
      <div className={`${classes.title_wrap}`}>
        <h1 ref={titleRef}>Travel Time</h1>
      </div>
    </div>
  );
}

export default Title;
