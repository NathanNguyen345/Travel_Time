import React from "react";

function PictureSocialDisplay(props) {
  const { likes, dislikes, comments, id } = props;
  return (
    <div>
      <h1>{likes}</h1>
      <h1>{dislikes}</h1>
      <h1>{comments.length}</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default PictureSocialDisplay;
