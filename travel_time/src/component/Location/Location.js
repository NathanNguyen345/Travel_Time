import React, { useEffect, useRef, useState } from "react";
import classes from "./Location.module.css";
import LocationItem from "./LocationItem";
import { gsap } from "gsap";

function Location() {
  const locationRef = useRef(null);
  const tl = new gsap.timeline();

  /*****
   * Use intersection observer to kick off GSAP animation. After 5 sec stop observing
   * to prevent repeats.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting) {
        tl.fromTo(
          ".location_img_container",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.5, duration: 1 }
        );
      }
    });

    observer.observe(locationRef.current);
    setTimeout(() => observer.unobserve(locationRef.current), 5000);
  });

  return (
    <div className={`${classes.location_container}`} ref={locationRef}>
      <div className={`${classes.location_grid}`}>
        <div className={`${classes.grid_header}`}>
          <h1>-Places I've Visted-</h1>
        </div>
        <div className={`${classes.grid_middle}`}>
          <div className={`${classes.flex}`}>
            <LocationItem city={"Toronto"} />
            <LocationItem city={"Seattle"} />
            <LocationItem city={"Portland"} />
            <LocationItem city={"Los Angeles"} />
            <LocationItem city={"San Jose"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
