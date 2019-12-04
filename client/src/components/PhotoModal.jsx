import React from 'react';
import Photo from './Photo.jsx';
import PhotoModalCarousel from './PhotoModalCarousel.jsx';
import PhotoModalDescriptionContainer from './PhotoModalDescriptionContainer.jsx';
import { FaChevronRight, FaChevronLeft, FaTimes} from 'react-icons/fa';

const PhotoModal = (props) => {
  return (
    <div>
      <div className="photoModalParentContainer">
        <div className="photoModalExitButtonContainer">
          <div className="photoModalExitButton" onClick={props.viewPhotoButtonClick}>
            <span className="FaTimes"> <FaTimes /> </span>
          </div> {/*photoModalExitButton*/}

        </div> {/*photoModalExitButtonContainer*/}
        <div className="photoModalLeftContainer">
          <div className="photoModalLeftArrowContainer">
            <div className="photoModalLeftArrow">
              <span className="FaChevronLeft" onClick={props.handleLeftArrowClick}> <FaChevronLeft /> </span>
            </div> {/*photoModalLeftArrow*/}

          </div> {/*photoModalLeftArrowContainer*/}

          <div className="photoModalMainPhotoContainer">
            <div className="photoModalMainPhoto">
              <Photo photoClass={'modalPhoto'} photo={props.photoDetails[props.currentPhoto]}/>

            </div> {/*photoModalMainPhoto*/}

          </div> {/*photoModalMainPhotoContainer*/}

          <div className="photoModalRightArrowContainer">
            <div className="photoModalRightArrow">
              <span className="FaChevronRight"  onClick={props.handleRightArrowClick}> <FaChevronRight /> </span>

            </div> {/*photoModalRightArrow*/}

          </div> {/*photoModalRightArrowContainer*/}

        </div> {/*photoModalLeftContainer*/}

        <div className="photoModalRightContainer">
          <div className="photoModalGradientContainer">
            <div className="photoModalCarouselContainer">
              <div className="photoModalCarouselLeftGradient"></div>
                <PhotoModalCarousel photos={props.photoDetails} currentPhoto={props.currentPhoto}/>

            </div> {/*photoModalCarouselContainer*/}
            <div className="photoModalCarouselRightGradient"></div>
          </div> {/*photoModalGradientContainer*/}

            <PhotoModalDescriptionContainer photos={photos} currentPhoto={currentPhoto}/>

          </div>

        </div>

      </div>
    )
  }
}

const PhotoModalCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    if (i === props.currentPhoto) {
      return <Photo photoClass={'carouselPhoto'} photo={photo} key={i}/>
    } else {
      return <Photo photoClass={'carouselPhotoFade'} photo={photo} key={i}/>
    }
  })
  let offsetAmount = ((100/props.photos.length) * 2 + (props.currentPhoto * (100/props.photos.length)) * -1);
  return (
    <div className="photoModalCarousel" style={{
      'transform': "translateX(" + offsetAmount + "% )"
    }}>
      {carouselPhotos}
    </div>
  );
};

const PhotoModalDescriptionContainer = (props) => {
  let totalPhotos = props.photos.length;
  let currentPhoto = props.currentPhoto + 1;
  let description = props.photos.length ? props.photos[props.currentPhoto].description : "";
  return (
    <div className="photoModalDescriptionContainer">
      <div className="photoModalPhotoNumber">
        {`${currentPhoto} / ${totalPhotos}`}
      </div>
      <div className="photoModalPhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModal;
