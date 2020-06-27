import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import classes from "./Location.module.css";
import LocationItem from "./LocationItem";
import { gsap } from "gsap";

function Location() {
  const locationRef = useRef(null);
  const [locations, setLocations] = useState([]);
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
    // setTimeout(() => observer.unobserve(locationRef.current), 2000);
  });

  // API to get LocationItem information
  useEffect(() => {
    axios
      .get("/location/getLocation")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Render LocationItem component
  const renderLocation = locations.map((location, id) => {
    return <LocationItem city={location.name} link={location.link} key={id} />;
  });

  return (
    <div className={`${classes.location_container} location`} ref={locationRef}>
      <div className={`${classes.location_overlay}`}></div>
      <div className={`${classes.location_grid}`}>
        <div className={`${classes.grid_header}`}>
          <h1>-Places I've Visted-</h1>
        </div>
        <div className={`${classes.grid_middle}`}>
          <div className={`${classes.flex}`}>{renderLocation}</div>
        </div>
      </div>
    </div>
  );
}

export default Location;
