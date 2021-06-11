import React from "react";

function PhotoView(props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{props.photo.title}</h3>
      <img
        loading="lazy"
        style={{ maxWidth: "100%" }}
        src={props.photo.url}
        alt="test"
      />
    </div>
  );
}
export default PhotoView;
