import React, { useRef, useEffect } from "react";
import classes from "./Nav.module.css";
import NavArrow from "./NavArrow";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const navRef = useRef(null);
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.to(navRef.current, { left: "100vw", duration: 1 }).to(navRef.current, {
      opacity: 1,
      duration: 1,
    });
  });

  /*****
   * GSAP scroll to div on click
   */
  const clickHandler = (location) => {
    gsap.to(window, { duration: 1, scrollTo: location });
  };

  return (
    <React.Fragment>
      <NavArrow />
      <div className={`${classes.nav_container} nav_container`} ref={navRef}>
        <div className={classes.nav_flex}>
          <ul className={classes.nav_list}>
            <li>
              <button onClick={() => clickHandler(".home")}>Home</button>
            </li>
            <li>
              <button onClick={() => clickHandler(".about")}>About Me</button>
            </li>
            <li>
              <button onClick={() => clickHandler(".location")}>
                Location
              </button>
            </li>
            <li>
              <button>Log In</button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
