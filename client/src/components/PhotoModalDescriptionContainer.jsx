import React from 'react';

const PhotoModalDescriptionContainer = (props) => {
  const { photos, currentPhoto } = props;
  const description = photos.length ? photos[currentPhoto].description : "";
  return (
    <div className="photoModalDescriptionContainer">
      <div className="photoModalPhotoNumber">
        {`${currentPhoto + 1} / ${photos.length}`}
      </div>
      <div className="photoModalPhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModalDescriptionContainer;
