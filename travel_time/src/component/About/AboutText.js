import React, { useEffect, useRef } from "react";
import classes from "./About.module.css";
import { gsap } from "gsap";

function AboutText() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  /*****
   * Use intersection observer to start GSAP animation
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting) {
        gsap.fromTo(
          [titleRef.current, paragraphRef.current],
          { x: "-150", opacity: 0 },
          { x: "0", opacity: 1, duration: 1.5 }
        );
      }
    });

    observer.observe(titleRef.current, paragraphRef.current);
  }, [titleRef, paragraphRef]);

  return (
    <div className={`${classes.flex_item}`}>
      <h1 className={`${classes.about_title}`} ref={titleRef}>
        About Me
      </h1>
      <p ref={paragraphRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit
        amet nisl purus in. Faucibus nisl tincidunt eget nullam non nisi est.
        Suspendisse interdum consectetur libero id faucibus nisl tincidunt.
        Scelerisque eu ultrices vitae auctor eu augue ut. In dictum non
        consectetur a erat nam at. Tempor commodo ullamcorper a lacus vestibulum
        sed arcu non. Viverra nibh cras pulvinar mattis nunc sed blandit libero
        volutpat. Euismod quis viverra nibh cras. Augue eget arcu dictum varius
        duis at consectetur lorem donec. Bibendum at varius vel pharetra vel
        turpis nunc eget lorem. Elementum nisi quis eleifend quam adipiscing
        vitae. Sed odio morbi quis commodo. Egestas integer eget aliquet nibh
        praesent tristique magna. Pellentesque elit eget gravida cum. Volutpat
        diam ut venenatis tellus in metus vulputate eu. Duis at consectetur
        lorem donec. Convallis tellus id interdum velit laoreet id donec
        ultrices. Natoque penatibus et magnis dis. Nulla aliquet porttitor lacus
        luctus accumsan tortor posuere ac ut. Non odio euismod lacinia at quis.
        Non tellus orci ac auctor augue mauris. Laoreet non curabitur gravida
        arcu ac tortor dignissim. Pellentesque elit ullamcorper dignissim cras
        tincidunt lobortis feugiat. At erat pellentesque adipiscing commodo elit
        at imperdiet dui accumsan. Congue mauris rhoncus aenean vel elit.
      </p>
    </div>
  );
}

export default AboutText;
