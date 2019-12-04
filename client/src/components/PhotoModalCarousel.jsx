import React from 'react';
import Photo from './Photo.jsx';

const PhotoModalCarousel = (props) => (
  <div className="photoModalCarousel">
    {props.photos.map((photo, i) => {
      const photoClassName = i === props.currentPhoto ?
        'carouselPhoto' : 'carouselPhotoActive';
      return <Photo photoClass={photoClassName} photoUrl={photo} key={i} />
    })}
  </div>
);

export default PhotoModalCarousel;
