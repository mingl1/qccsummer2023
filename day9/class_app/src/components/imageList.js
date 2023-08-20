import React from "react";

const ImagesList = function (props) {
  const images = props.images.map((image) => {
    return <img src={image.webformatURL} alt="" key={image.id} />;
  });
  return (
    <div>
      <p>My images list</p>
      {images}
    </div>
  );
};

export default ImagesList;
