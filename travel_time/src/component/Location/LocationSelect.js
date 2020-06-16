import React, { useContext } from "react";
import classes from "./Location.module.css";
import { ImageDataContext } from "./Location";
import gsap from "gsap/gsap-core";

function LocationSelect() {
  const imgDataContext = useContext(ImageDataContext);
  const tl = new gsap.timeline();

  const buttonClick = () => {
    imgDataContext.imgDataDispatch({ type: "exit" });
    tl.to(".test", { display: "flex", duration: 0.01 })
      .to(".img_select_overlay", { opacity: 0, duration: 0.3 })
      .to(".img_select_overlay", {
        zIndex: 1,
        duration: 0.01,
      });
  };

  return (
    <div className={`${classes.location_select_container} img_select_overlay`}>
      <div className={`${classes.location_select_grid}`}>
        <div className={`${classes.location_select_background}`}>
          <img src={require("../../images/Location/toronto.jpg")}></img>
        </div>
        <div className={`${classes.location_select_info_flex}`}>
          <div className={`${classes.location_select_info_flex_item}`}>
            <h1>{imgDataContext.imgDataState.place}</h1>
            <p>
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
            <button onClick={buttonClick}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSelect;
