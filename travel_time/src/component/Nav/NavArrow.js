import React, { useRef } from "react";
import classes from "./Nav.module.css";
import { gsap } from "gsap";

function NavArrow() {
  const arrowContainerRef = useRef(null);
  const arrowRef = useRef(null);
  var showNav = false;
  const tl = new gsap.timeline();

  /*****
   * GSAP animate nav arrow to bounce
   */
  const mouseEnter = () => {
    gsap.to(arrowContainerRef.current, {
      x: "-5px",
      duration: 0.5,
    });
    gsap.to(arrowContainerRef.current, {
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
      tl.to(arrowContainerRef.current, {
        rotateZ: "180deg",
        duration: 1,
      })
        .fromTo(
          ".nav_container",
          { left: "100vw" },
          { left: "87vw", duration: 1 },
          "-=1"
        )
        .to(arrowRef.current, { color: "black", duration: 1 }, "-=1");
      showNav = true;
    } else {
      tl.to(arrowContainerRef.current, {
        rotateZ: "360deg",
        duration: 1,
      })
        .fromTo(
          ".nav_container",
          { left: "87vw" },
          { left: "100vw", duration: 1 },
          "-=1"
        )
        .to(arrowRef.current, { color: "#7ae0e0", duration: 1 }, "-=1");
      showNav = false;
    }
  };

  return (
    <div className={`${classes.nav_arrow_container}`} ref={arrowContainerRef}>
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
