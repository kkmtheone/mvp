
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={`http://localhost:3001/${image.path}`} alt={image.description} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageCard;
