import React from "react";
import classes from "../Admin.module.css";
import PictureDeleteDisplay from "./PictureDeleteDisplay";
import PictureInfoDisplay from "./PictureInfoDisplay";
import PictureSocialDisplay from "./PictureSocialDisplay";

function PictureItem(props) {
  const {
    _id,
    name,
    description,
    likes,
    dislikes,
    comments,
    img,
    contentType,
  } = props;

  return (
    <div className={`${classes.ap_picture_item}`}>
      <PictureDeleteDisplay img={img.data} contentType={contentType} />
      <PictureInfoDisplay name={name} description={description} />
      <PictureSocialDisplay
        likes={likes}
        dislikes={dislikes}
        comments={comments}
        id={_id}
      />
    </div>
  );
}

export default PictureItem;
