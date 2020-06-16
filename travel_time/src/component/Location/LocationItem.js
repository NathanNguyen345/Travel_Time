import React, { useRef, useContext } from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";
import { ImageDataContext } from "../../App";
import { Link } from "react-router-dom";

function LocationItem(props) {
  const { city } = props;
  const overlayRef = useRef();
  const imgDataContext = useContext(ImageDataContext);

  const mouseOver = () => {
    gsap.to(overlayRef.current, { top: "0", duration: 0.15, ease: "none" });
  };

  const mouseExit = () => {
    gsap.to(overlayRef.current, { top: "100%", duration: 0.15, ease: "none" });
  };

  const buttonClick = () => {
    imgDataContext.imgDataDispatch({ type: "location", value: city });
  };

  const imgSelector = (city) => {
    switch (city) {
      case city:
        return (
          <img
            src={require(`../../images/Location/${city}.jpg`)}
            alt={city}
            className={classes.location_img}
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
        className={`${classes.img_container}`}
        onMouseOver={mouseOver}
        onMouseLeave={mouseExit}
      >
        {imgSelector(city)}
        <Link to={`/Location/${city}`}>
          <div className={`${classes.img_overlay}`} ref={overlayRef}>
            <div className={`${classes.overlay_flex_item}`}>
              <button onClick={buttonClick}>More on {city}</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LocationItem;
