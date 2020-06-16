import React, { useRef, useEffect } from "react";
import classes from "./Landing.module.css";
import { gsap } from "gsap";

function Social() {
  const personalRef = useRef(null);
  const linkedinRef = useRef(null);
  const instaRef = useRef(null);
  const tl = new gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      [personalRef.current, linkedinRef.current, instaRef.current],
      { opacity: 0, scale: 2 },
      { opacity: 1, scale: 1, stagger: 0.5, duration: 1 },
      "+=2.5"
    ).to([personalRef.current, linkedinRef.current, instaRef.current], {
      opacity: 0.5,
      stagger: 0.5,
      duration: 1,
    });
  });

  /*****
   * GSAP animate mouse over to scale up and increase opacity
   */
  const mouseEnter = (ref) => {
    gsap.to(ref.current, { opacity: 1, scale: 1.5, duration: 0.5 });
  };

  /*****
   * GSAP animate mouse exiit to scale down and decrease opacity
   */
  const mouseExit = (ref) => {
    gsap.to(ref.current, { opacity: 0.5, scale: 1, duration: 0.5 });
  };

  return (
    <div className={`${classes.social}`}>
      <a href="https://nathannguyen345.com/">
        <img
          src={require("../../images/Landing/user.svg")}
          alt="Person_Webpage"
          ref={personalRef}
          onMouseEnter={() => mouseEnter(personalRef)}
          onMouseLeave={() => mouseExit(personalRef)}
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/nathannguyen345/">
        <img
          src={require("../../images/Landing/linkedin.svg")}
          alt="LinkedIn"
          ref={linkedinRef}
          onMouseEnter={() => mouseEnter(linkedinRef)}
          onMouseLeave={() => mouseExit(linkedinRef)}
        ></img>
      </a>
      <img
        src={require("../../images/Landing/insta.svg")}
        alt="Instagram"
        ref={instaRef}
        onMouseEnter={() => mouseEnter(instaRef)}
        onMouseLeave={() => mouseExit(instaRef)}
      ></img>
    </div>
  );
}

export default Social;
