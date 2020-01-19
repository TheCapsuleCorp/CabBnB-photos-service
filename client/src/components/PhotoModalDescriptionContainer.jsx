import React from 'react';
import '../../dist/PhotoModalDescriptionContainer.css';

const PhotoModalDescriptionContainer = ({ photos, currentPhoto }) => {
  const description = photos.length ? photos[currentPhoto].description : "";
  const photoNumber = `${currentPhoto + 1} / ${photos.length}`;
  return (
    <div className="photoModalDescriptionContainer">
      <div className="photoModalPhotoNumber">
        {photoNumber}
      </div>
      <div className="photoModalPhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModalDescriptionContainer;
