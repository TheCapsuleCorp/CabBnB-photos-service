import React from 'react';
import Photo from './Photo.jsx';
import '../../dist/photoModalCarousel.css';

const PhotoModalCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    const photoClassName = i === props.currentPhoto ?
      'carouselPhoto' : 'carouselPhotoActive';
        return <Photo photoClass={photoClassName} photo={photo} key={i} />
  });

  let offsetAmount =
    ((100 / props.photos.length) * 2 + (props.currentPhoto *
    (100 / props.photos.length)) * -1);

  let style = {
    'transform': "translateX(" + offsetAmount + "% )"
  }

  return (
    <div className="photoModalCarousel" style={style}>
      {carouselPhotos}
    </div>
  );
}

export default PhotoModalCarousel;
