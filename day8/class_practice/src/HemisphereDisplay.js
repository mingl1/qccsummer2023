import React from "react";
import southernImg from "./images/southern.jpg";
import northernImg from "./images/northern.jpg";
import ecuatorianImg from "./images/ecuatorianLine.jpg";

const HemisphereDisplay = (props) => {
  const hemisphereResult = props.latitude;
  let userLocation = "";
  let picture;
  if (hemisphereResult > 0) {
    userLocation = "Northern Hemisphere!";
    picture = northernImg;
  } else if (hemisphereResult < 0) {
    userLocation = "Southern Hemisphere!";
    picture = southernImg;
  } else {
    userLocation = "Ecuadorian line!";
    picture = ecuatorianImg;
  }
  return (
    <div>
      <h1>Welcome to hemisphere app</h1>
      <p>
        You are at <span>{userLocation}</span>
      </p>
      <img src={picture} style={{ width: "50%" }} alt="" />
    </div>
  );
};

export default HemisphereDisplay;
