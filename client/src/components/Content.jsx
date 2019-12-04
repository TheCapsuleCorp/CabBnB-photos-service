import React from 'react';
import { FaBeer, FaHeart} from 'react-icons/fa';
import Photo from './Photo.jsx';
import MobilePaginationDotsContainer from './MobilePaginationDotsContainer.jsx';

const Content = (props) => {
  const { currentPhoto, handleViewPhotosButtonClick, photos } = props;
  
  return (
    <div className="parent">
      <MobilePaginationDotsContainer photo={photos} currentPhoto={currentPhoto}/>
      <Photo photoClass={'leftPhoto desktopPhotoBorderAndPosition'} photo={photos[0]} />
      <div className="mobileMainPhotoContainer" onClick={handleViewPhotosButtonClick} >
        <Photo photoClass={'mobileMainPhoto'} photo={photos[currentPhoto]} />
      </div>
      <div className="rightPhotosContainer">
        <div className="rightTopPhotoContainer">
          <Photo photoClass={'rightTopLeftPhoto desktopPhotoBorderAndPosition'}
            photo={photos[1]} />
          <div className="shareAndSaveContainer">
            <div className="saveButtonContainer">
              <span className="save homeScreenButton">
                <FaHeart />  Save
              </span>
            </div>
            <div className="shareButtonContainer">
              <span className="share homeScreenButton">
                <FaBeer />  Share
              </span>
            </div>
          </div>
          <Photo photoClass={'rightTopRightPhoto desktopPhotoBorderAndPosition'}
            photo={photos[2]} />
        </div>
        <div className="rightBottomPhotoContainer">
          <Photo photoClass={'rightBottomLeftPhoto desktopPhotoBorderAndPosition'}
            photo={photos[3]} />
          <div className="viewPhotosButtonContainer" onClick={handleViewPhotosButtonClick}>
            <span className="view homeScreenButton">View Photos</span>
          </div>
          <Photo photoClass={'rightBottomRightPhoto desktopPhotoBorderAndPosition'}
            photo={photos[4]} />
        </div>
      </div>
    </div>
  );
}

export default Content;
