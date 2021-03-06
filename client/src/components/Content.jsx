import React from 'react';
import { FaBeer, FaHeart} from 'react-icons/fa';
import Photo from './Photo.jsx';
import MobilePaginationDotsContainer from './MobilePaginationDotsContainer.jsx';
import '../../dist/Content.css';

const Content = ({ currentPhoto, handleViewPhotosButtonClick, photos }) => {

  return (
    <div className="parent">
      <MobilePaginationDotsContainer photo={photos} currentPhoto={currentPhoto} />
      <Photo photoClass="leftPhoto desktopPhotoBorderAndPosition" photo={photos[0]} />
      <div className="mobileMainPhotoContainer" onClick={handleViewPhotosButtonClick} >
        <Photo photoClass="mobileMainPhoto" photo={photos[currentPhoto]} />
      </div>
      <div className="rightPhotosContainer">
        <div className="rightTopPhotoContainer">
          <Photo photoClass="rightTopLeftPhoto desktopPhotoBorderAndPosition"
            photo={photos[1]} />
          <div className="shareAndSaveContainer">
            <div className="saveButtonContainer">
              <span className="save homeScreenButton">
                <FaHeart />  <span className="saveText">Save</span>
              </span>
            </div>
            <div className="shareButtonContainer">
              <span className="share homeScreenButton">
                <FaBeer />  <span className="shareText">Share</span>
              </span>
            </div>
          </div>
          <Photo
            photoClass="rightTopRightPhoto desktopPhotoBorderAndPosition"
            photo={photos[2]}
          />
        </div>
        <div className="rightBottomPhotoContainer">
          <Photo
            photoClass="rightBottomLeftPhoto desktopPhotoBorderAndPosition"
            photo={photos[3]}
          />
          <div className="viewPhotosButtonContainer" onClick={handleViewPhotosButtonClick}>
            <span className="view homeScreenButton">View Photos</span>
          </div>
          <Photo
            photoClass="rightBottomRightPhoto desktopPhotoBorderAndPosition"
            photo={photos[4]}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
