import React from "react";

function PictureInfoDisplay(props) {
  const { name, description } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PictureInfoDisplay;
