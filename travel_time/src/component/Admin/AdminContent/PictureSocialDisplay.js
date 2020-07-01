import React from "react";
import classes from "../Admin.module.css";
import DeleteButton from "./DeleteButton";

function PictureSocialDisplay(props) {
  const { likes, dislikes, comments, id } = props;
  return (
    <div className={`${classes.ap_picture_social_grid}`}>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img src={require("../../../images/Admin/thumb.svg")}></img>
        <div>
          <h1>{likes}</h1>
        </div>
      </div>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img src={require("../../../images/Admin/thumb.svg")}></img>
        <h1>{dislikes}</h1>
      </div>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img src={require("../../../images/Admin/comment.svg")}></img>
        <h1>{comments.length}</h1>
      </div>
      <DeleteButton />
    </div>
  );
}

export default PictureSocialDisplay;
