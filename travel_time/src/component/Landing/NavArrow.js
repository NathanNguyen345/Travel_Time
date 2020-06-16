import React, { useRef } from "react";
import classes from "./Landing.module.css";
import { gsap } from "gsap";

function NavArrow() {
  const arrowRef = useRef(null);
  var showNav = false;

  /*****
   * GSAP animate nav arrow to bounce
   */
  const mouseEnter = () => {
    gsap.to(arrowRef.current, {
      x: "-5px",
      duration: 0.5,
    });
    gsap.to(arrowRef.current, {
      x: "0px",
      duration: 0.5,
      delay: 0.5,
    });
  };

  /*****
   * Rotate nav icon 180 deg and change the color on click
   */
  const mouseClick = () => {
    if (!showNav) {
      gsap.to(arrowRef.current, {
        rotateZ: "180deg",
        color: "white",
        duration: 1,
      });
      showNav = true;
    } else {
      gsap.to(arrowRef.current, {
        rotateZ: "360deg",
        color: "#7ae0e0",
        duration: 1,
      });
      showNav = false;
    }
  };

  return (
    <div className={`${classes.nav}`}>
      <span
        className={`${classes.nav_arrow}`}
        ref={arrowRef}
        onMouseEnter={mouseEnter}
        onClick={mouseClick}
      >
        &#x25C0;
      </span>
    </div>
  );
}

export default NavArrow;
