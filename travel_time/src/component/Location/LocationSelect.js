import React, { useRef, useEffect } from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";
import LocationSelectImg from "./LocationSelectImg";
import LocationSelectInfo from "./LocationSelectInfo";

function LocationSelect(props) {
  const { match, history } = props;
  const locationRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = new gsap.timeline();

  /*****
   * On load, fade div in and use GSAP for animation.
   */
  useEffect(() => {
    tl.to(locationRef.current, {
      opacity: 1,
      duration: 1,
    })
      .fromTo(
        ".location_select_img",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        [
          ".location_select_title",
          ".location_select_p",
          ".location_select_button",
        ],
        { opacity: 0, y: "30px" },
        { opacity: 1, y: 0, stagger: 0.5, duration: 1 },
        "-=1"
      );
  });

  return (
    <div
      className={`${classes.location_select_container} location_select_container`}
      ref={locationRef}
    >
      <div className={`${classes.location_select_grid}`}>
        <LocationSelectImg city={match.params.city} />
        <LocationSelectInfo city={match.params.city} history={history} />
      </div>
    </div>
  );
}

export default LocationSelect;
