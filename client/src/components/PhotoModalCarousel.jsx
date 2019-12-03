import React from 'react';
import Photo from './Photo.jsx';

const PhotoModalCarousel = (props) => (
    <div className="photoModalCarousel">
      {props.photos.map((photo, i) => {
        if (i === props.currentPhoto) {
          return <Photo photoClass={'carouselPhoto'} photoUrl={photo} key={i}/>
        } else {
          return <Photo photoClass={'carouselPhotoActive'} photoUrl={photo} key={i}/>
        }
      })}
    </div>
  );

export default PhotoModalCarousel;
