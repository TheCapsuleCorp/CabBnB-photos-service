import React from 'react';

const PhotoModalDescriptionContainer = (props) => {
  const { photos, currentPhoto } = props;
  const description = photos.length ? photos[currentPhoto].description : "";
  return (
    <div className="photoModuleDescriptionContainer">
      <div className="photoModulePhotoNumber">
        {`${currentPhoto + 1} / ${photos.length}`}
      </div>
      <div className="photoModulePhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModalDescriptionContainer;
