import React, { useRef, useContext } from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";
import { ImageDataContext } from "./Location";

function LocationItem(props) {
  const { city, id } = props;
  const overlayRef = useRef();
  const imgDataContext = useContext(ImageDataContext);
  const tl = new gsap.timeline();

  const mouseOver = () => {
    gsap.to(overlayRef.current, { top: "0", duration: 0.15, ease: "none" });
  };

  const mouseExit = () => {
    gsap.to(overlayRef.current, { top: "100%", duration: 0.15, ease: "none" });
  };

  const buttonClick = () => {
    imgDataContext.imgDataDispatch({ type: "location", value: city });
    tl.to(".img_select_overlay", { zIndex: 3, duration: 0.01 })
      .to(".img_select_overlay", {
        opacity: 1,
        duration: 0.3,
      })
      .to(".test", { display: "none", duration: 0.01 });
  };

  const imgSelector = (id) => {
    switch (id) {
      case 1:
        return (
          <img
            src={require("../../images/Location/toronto.jpg")}
            alt="torono"
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
        {imgSelector(id)}
        <div className={`${classes.img_overlay}`} ref={overlayRef}>
          <div className={`${classes.overlay_flex_item}`}>
            <button onClick={buttonClick}>More on {city}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationItem;
