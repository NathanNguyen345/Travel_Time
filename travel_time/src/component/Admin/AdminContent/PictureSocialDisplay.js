import React from "react";
import classes from "../Admin.module.css";
import DeleteButton from "./DeleteButton";

function PictureSocialDisplay(props) {
  const { likes, dislikes, comments, id } = props;
  return (
    <div className={`${classes.ap_picture_social_grid}`}>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img src={require("../../../images/Admin/thumb.svg")}></img>
        <p>{likes}</p>
      </div>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img
          src={require("../../../images/Admin/thumb.svg")}
          className={`${classes.ap_picture_flipped}`}
        ></img>
        <p>{dislikes}</p>
      </div>
      <div className={`${classes.ap_picture_social_flex}`}>
        <img src={require("../../../images/Admin/comment.svg")}></img>
        <p>{comments.length}</p>
      </div>
      <DeleteButton id={id} />
    </div>
  );
}

export default PictureSocialDisplay;
