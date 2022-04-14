import React from "react";

function Map(props) {
  // Can remove the storymaps embedded navbar by passing in &embed at the end of the
  // URL
  return (
    <iframe
      width="100%"
      height="500px"
      src={props.storymapsLink}
      title="Storymap"
    ></iframe>
  );
}

export default Map;
