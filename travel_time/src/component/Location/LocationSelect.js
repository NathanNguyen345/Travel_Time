import React, { useRef, useEffect } from "react";
import classes from "./Location.module.css";
import { gsap } from "gsap";

function LocationSelect(props) {
  const { match, location, history } = props;
  const locationRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
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
        imgRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        [titleRef.current, paraRef.current, buttonRef.current],
        { opacity: 0, y: "30px" },
        { opacity: 1, y: 0, stagger: 0.5, duration: 1 },
        "-=1"
      );
  });

  /*****
   * When exit button is clicked, fade out and reroute back to history
   */
  const buttonClick = () => {
    tl.to(locationRef.current, {
      opacity: 0,
      duration: 1,
    })
      .fromTo(
        imgRef.current,
        { x: "0%", opacity: 1 },
        { x: "-100%", opacity: 0, duration: 1 },
        "-=1"
      )
      .fromTo(
        [buttonRef.current, paraRef.current, titleRef.current],
        { opacity: 1, y: "0px" },
        { opacity: 0, y: "30px", stagger: 0.5, duration: 1 },
        "-=1"
      );

    setTimeout(() => history.goBack(), 1000);
  };

  return (
    <div className={`${classes.location_select_container}`} ref={locationRef}>
      {console.log(match, location, history)}
      <div className={`${classes.location_select_grid}`}>
        <div className={`${classes.location_select_background}`}>
          <img
            src={require(`../../images/Location/${match.params.city}.jpg`)}
            alt={match.params.city}
            ref={imgRef}
          ></img>
        </div>
        <div className={`${classes.location_select_info_flex}`}>
          <div className={`${classes.location_select_info_flex_item}`}>
            <h1 ref={titleRef}>{match.params.city}</h1>
            <p ref={paraRef}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl purus in. Faucibus nisl tincidunt
              eget nullam non nisi est. Suspendisse interdum consectetur libero
              id faucibus nisl tincidunt. Scelerisque eu ultrices vitae auctor
              eu augue ut. In dictum non consectetur a erat nam at. Tempor
              commodo ullamcorper a lacus vestibulum sed arcu non. Viverra nibh
              cras pulvinar mattis nunc sed blandit libero volutpat. Euismod
              quis viverra nibh cras. Augue eget arcu dictum varius duis at
              consectetur lorem donec. Bibendum at varius vel pharetra vel
              turpis nunc eget lorem. Elementum nisi quis eleifend quam
              adipiscing vitae. Sed odio morbi quis commodo. Egestas integer
              eget aliquet nibh praesent tristique magna. Pellentesque elit eget
              gravida cum. Volutpat diam ut venenatis tellus in metus vulputate
              eu. Duis at consectetur lorem donec. Convallis tellus id interdum
              velit laoreet id donec ultrices. Natoque penatibus et magnis dis.
              Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac
              ut. Non odio euismod lacinia at quis. Non tellus orci ac auctor
              augue mauris. Laoreet non curabitur gravida arcu ac tortor
              dignissim. Pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis feugiat. At erat pellentesque adipiscing commodo elit at
              imperdiet dui accumsan. Congue mauris rhoncus aenean vel elit.
            </p>
            <button
              onClick={buttonClick}
              className={`${classes.back_button}`}
              ref={buttonRef}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSelect;
