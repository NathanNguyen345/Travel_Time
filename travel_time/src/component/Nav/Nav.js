import React, { useRef, useEffect } from "react";
import classes from "./Nav.module.css";
import { gsap } from "gsap";
import NavArrow from "./NavArrow";

function Nav() {
  const navRef = useRef(null);
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.to(navRef.current, { left: "100vw", duration: 1 }).to(navRef.current, {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <React.Fragment>
      <NavArrow />
      <div className={`${classes.nav_container} nav_container`} ref={navRef}>
        <div className={classes.nav_flex}>
          <ul className={classes.nav_list}>
            <li>Home</li>
            <li>About Me</li>
            <li>Locations</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
