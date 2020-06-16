import React, { useEffect, useRef } from "react";
import classes from "./About.module.css";
import { gsap } from "gsap";

function AboutImg() {
  const imgRef = useRef(null);

  /******
   * Use intersection observer to start GSAP animation
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting) {
        gsap.fromTo(
          imgRef.current,
          { x: "150", opacity: 0 },
          { x: "0", opacity: 1, duration: 1.5 }
        );
      }
    });

    observer.observe(imgRef.current);
  }, [imgRef]);

  return (
    <div className={`${classes.flex_item}`}>
      <img
        src={require("../../images/About/sony_camera.png")}
        className={`${classes.about_img}`}
        alt="Sony_Camera"
        ref={imgRef}
      ></img>
    </div>
  );
}

export default AboutImg;
