import React from "react";
import classes from "../Admin.module.css";

function PictureInfoDisplay(props) {
  const { name, description } = props;
  return (
    <div className={`${classes.ap_picture_item_info}`}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PictureInfoDisplay;
