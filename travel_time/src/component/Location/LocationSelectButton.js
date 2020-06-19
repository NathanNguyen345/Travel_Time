import React from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";

function LocationSelectButton(props) {
  const { history } = props;
  const tl = new gsap.timeline();

  /*****
   * When exit button is clicked, fade out and reroute back to history
   */
  const buttonClick = () => {
    tl.to(".location_select_container", {
      opacity: 0,
      duration: 1,
    })
      .fromTo(
        ".location_select_img",
        { x: "0%", opacity: 1 },
        { x: "-100%", opacity: 0, duration: 1 },
        "-=1"
      )
      .fromTo(
        [
          ".location_select_button",
          ".location_select_p",
          ".location_select_title",
        ],
        { opacity: 1, y: "0px" },
        { opacity: 0, y: "30px", stagger: 0.5, duration: 1 },
        "-=1"
      );

    setTimeout(() => history.goBack(), 1000);
  };
  return (
    <React.Fragment>
      <button
        onClick={buttonClick}
        className={`${classes.back_button} location_select_button`}
      >
        Go Back
      </button>
    </React.Fragment>
  );
}

export default LocationSelectButton;
