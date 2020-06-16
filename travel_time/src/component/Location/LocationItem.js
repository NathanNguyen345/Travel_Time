import React, { useRef } from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function LocationItem(props) {
  const { city } = props;
  const overlayRef = useRef();

  /*****
   * Overlay location image on mouse over.
   */
  const mouseOver = () => {
    gsap.to(overlayRef.current, { top: "0", duration: 0.15, ease: "none" });
  };

  /*****
   * Remove overlay on location image on mouse exit.
   */
  const mouseExit = () => {
    gsap.to(overlayRef.current, { top: "100%", duration: 0.15, ease: "none" });
  };

  /*****
   * This function will select the image based on prop
   */
  const imgSelector = (city) => {
    switch (city) {
      case "Toronto":
        return (
          <img
            src={require(`../../images/Location/Toronto-mini.jpg`)}
            alt={city}
            className={`${classes.location_img}`}
          ></img>
        );
      case "Seattle":
        return (
          <img
            src={require(`../../images/Location/Seattle-mini.jpg`)}
            alt={city}
            className={`${classes.location_img}`}
          ></img>
        );
      case "Portland":
        return (
          <img
            src={require(`../../images/Location/Portland-mini.jpg`)}
            alt={city}
            className={`${classes.location_img}`}
          ></img>
        );
      case "Los Angeles":
        return (
          <img
            src={require(`../../images/Location/Los Angeles-mini.jpg`)}
            alt={city}
            className={`${classes.location_img}`}
          ></img>
        );
      case "San Jose":
        return (
          <img
            src={require(`../../images/Location/San Jose-mini.jpg`)}
            alt={city}
            className={`${classes.location_img}`}
          ></img>
        );
      default:
        break;
    }
  };

  return (
    <div className={`${classes.flex_item}`}>
      <h1 className={`${classes.location_title}`}>{city}</h1>
      <div
        className={`${classes.img_container} location_img_container`}
        onMouseOver={mouseOver}
        onMouseLeave={mouseExit}
      >
        {imgSelector(city)}
        <Link to={`/Location/${city}`}>
          <div className={`${classes.img_overlay}`} ref={overlayRef}>
            <div className={`${classes.overlay_flex_item}`}>
              <button>More on {city}</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LocationItem;
