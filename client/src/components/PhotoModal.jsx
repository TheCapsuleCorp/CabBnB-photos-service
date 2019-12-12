import React from 'react';
import Photo from './Photo.jsx';
import PhotoModalCarousel from './PhotoModalCarousel.jsx';
import PhotoModalDescriptionContainer from './PhotoModalDescriptionContainer.jsx';
import { FaChevronRight, FaChevronLeft, FaTimes } from 'react-icons/fa';
import '../../dist/PhotoModal.css';

const PhotoModal = ({ currentPhoto, handleLeftArrowClick, handleRightArrowClick, photos, viewPhotoButtonClick }) => (
  <div>
    <div className="photoModalParentContainer">
      <div className="photoModalExitButtonContainer">
        <div className="photoModalExitButton" onClick={viewPhotoButtonClick}>
          <span className="FaTimes">
            <FaTimes />
          </span>
        </div>
      </div>
      <div className="photoModalLeftContainer">
        <div className="photoModalLeftArrowContainer">
          <div className="photoModalLeftArrow">
            <span className="FaChevronLeft" onClick={handleLeftArrowClick}>
              <FaChevronLeft />
            </span>
          </div>
        </div>
        <div className="photoModalMainPhotoContainer">
          <div className="photoModalMainPhoto">
            <Photo photoClass="modalPhoto" photo={photos[currentPhoto]} />
          </div>
        </div>
        <div className="photoModalRightArrowContainer">
          <div className="photoModalRightArrow">
            <span className="FaChevronRight"  onClick={handleRightArrowClick}>
              <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
      <div className="photoModalRightContainer">
        <div className="photoModalGradientContainer">
          <div className="photoModalCarouselContainer">
            <div className="photoModalCarouselLeftGradient"></div>
              <PhotoModalCarousel photos={photos} currentPhoto={currentPhoto} />
          </div>
          <div className="photoModalCarouselRightGradient"></div>
        </div>
        <PhotoModalDescriptionContainer photos={photos} currentPhoto={currentPhoto} />
      </div>
    </div>
  </div>
);

export default PhotoModal;
