import React from 'react';
import Photo from './Photo.jsx';

const PhotoModalCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    const photoClassName = i === props.currentPhoto ?
      'carouselPhoto' : 'carouselPhotoActive';
      return <Photo photoClass={photoClassName} photo={photo} key={i} />
  })

  let offsetAmount = ((100/props.photos.length) * 2 + (props.currentPhoto *
    (100/props.photos.length)) * -1);
    
  return (
    <div className="photoModalCarousel" style={{
      'transform': "translateX(" + offsetAmount + "% )"
    }}>
      {carouselPhotos}
    </div>
  );
}

export default PhotoModalCarousel;
